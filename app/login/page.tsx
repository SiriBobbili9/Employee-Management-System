"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
} from "@mui/material";

import {
  Visibility,
  VisibilityOff,
  LockOutlined,
} from "@mui/icons-material";

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateField = (
    field: "email" | "password",
    value: string
  ) => {
    if (field === "email") {
      if (!value.trim()) {
        return "Email is required";
      }

      if (!/^\S+@\S+\.\S+$/.test(value)) {
        return "Enter a valid email";
      }

      return "";
    }

    if (!value.trim()) {
      return "Password is required";
    }

    if (value.length < 6) {
      return "Password must be at least 6 characters";
    }

    return "";
  };

  const validateForm = () => {
    const emailError = validateField("email", formData.email);
    const passwordError = validateField("password", formData.password);

    setErrors({
      email: emailError,
      password: passwordError,
    });

    return !emailError && !passwordError;
  };

  const handleChange = (
    field: string,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (field === "email" || field === "password") {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleBlur = (field: "email" | "password") => {
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));
  };

  const handleLogin = () => {
    if (!validateForm()) {
      return;
    }

    // Will connect Redux + API later
    router.push("/dashboard");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f7fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Card
        elevation={5}
        sx={{
          width: 420,
          borderRadius: 3,
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 3,
            }}
          >
            <LockOutlined
              color="primary"
              sx={{ fontSize: 50 }}
            />
          </Box>

          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Welcome Back
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              textAlign: "center",
              mb: 4,
            }}
          >
            Sign in to Enterprise Employee Management System
          </Typography>

          <TextField
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            value={formData.email}
            onChange={(e) =>
              handleChange("email", e.target.value)
            }
            onBlur={() => handleBlur("email")}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type={
              showPassword ? "text" : "password"
            }
            value={formData.password}
            onChange={(e) =>
              handleChange(
                "password",
                e.target.value
              )
            }
            onBlur={() => handleBlur("password")}
            error={Boolean(errors.password)}
            helperText={errors.password}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowPassword(
                          !showPassword
                        )
                      }
                    >
                      {showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 1,
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.rememberMe}
                  onChange={(e) =>
                    handleChange(
                      "rememberMe",
                      e.target.checked
                    )
                  }
                />
              }
              label="Remember Me"
            />

            {/* <Link
              href="/forgot-password"
              underline="hover"
            >
              Forgot Password?
            </Link> */}
          </Box>

          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3 }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}