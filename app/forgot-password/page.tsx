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
  Alert,
  Link,
} from "@mui/material";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function ForgotPasswordPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setSuccess("");
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    // API integration will be added later
    setSuccess(
      "If an account exists with this email, a password reset link has been sent."
    );
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
        sx={{
          width: 420,
          borderRadius: 3,
          boxShadow: 5,
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box
            display="flex"
            justifyContent="center"
            mb={2}
          >
            <EmailOutlinedIcon
              color="primary"
              sx={{ fontSize: 55 }}
            />
          </Box>

          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
          >
            Forgot Password
          </Typography>

          <Typography
            align="center"
            color="text.secondary"
            mb={3}
          >
            Enter your registered email address and we'll send you a password reset link.
          </Typography>

          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {success}
            </Alert>
          )}

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <TextField
            fullWidth
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3 }}
            onClick={handleSubmit}
          >
            Send Reset Link
          </Button>

          <Box textAlign="center" mt={3}>
            <Link
              component="button"
              underline="hover"
              onClick={() => router.push("/login")}
            >
              Back to Login
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}