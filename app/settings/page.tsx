"use client";

import { useEffect, useMemo, useState } from "react";

import MainLayout from "../components/layout/MainLayout";
import SettingsHeader from "../components/settings/SettingsHeader";
import CompanySettings from "../components/settings/CompanySettings";
import ProfileSettings from "../components/settings/ProfileSettings";
import NotificationSettings from "../components/settings/NotificationSettings";
import SecuritySettings from "../components/settings/SecuritySettings";
import ThemeSettings from "../components/settings/ThemeSettings";
import { Alert, Snackbar } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  SettingsFormData,
  setSettingsField,
} from "../redux/slices/settingsSlice";
import {
  fetchSettings,
  updateSettings,
} from "../redux/thunks/settingsThunk";

export default function SettingsPage() {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.settings);

  const [errors, setErrors] = useState<
    Partial<Record<keyof SettingsFormData, string>>
  >({});

  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchSettings());
  }, [dispatch]);

  const handleChange = (
    field: keyof SettingsFormData,
    value: string
  ) => {
    dispatch(setSettingsField({ field, value }));

    setErrors((prev) => {
      if (!prev[field]) {
        return prev;
      }

      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleToggle = (
    field: keyof SettingsFormData,
    value: boolean
  ) => {
    dispatch(setSettingsField({ field, value }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof SettingsFormData, string>> = {};

    if (!data.companyName.trim()) {
      nextErrors.companyName = "Company name is required";
    }

    if (!data.companyEmail.trim()) {
      nextErrors.companyEmail = "Company email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(data.companyEmail)) {
      nextErrors.companyEmail = "Enter a valid company email";
    }

    if (!data.fullName.trim()) {
      nextErrors.fullName = "Full name is required";
    }

    if (!data.profileEmail.trim()) {
      nextErrors.profileEmail = "Profile email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(data.profileEmail)) {
      nextErrors.profileEmail = "Enter a valid profile email";
    }

    const passwordFieldsFilled =
      data.currentPassword.trim() !== "" ||
      data.newPassword.trim() !== "" ||
      data.confirmPassword.trim() !== "";

    if (passwordFieldsFilled) {
      if (!data.currentPassword.trim()) {
        nextErrors.currentPassword = "Current password is required";
      }

      if (!data.newPassword.trim()) {
        nextErrors.newPassword = "New password is required";
      }

      if (!data.confirmPassword.trim()) {
        nextErrors.confirmPassword = "Confirm password is required";
      }

      if (
        data.newPassword.trim() &&
        data.confirmPassword.trim() &&
        data.newPassword !== data.confirmPassword
      ) {
        nextErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) {
      return;
    }

    try {
      await dispatch(updateSettings(data)).unwrap();
      setSuccessOpen(true);
      setErrorOpen(false);
    } catch {
      setErrorOpen(true);
    }
  };

  const hasErrors = useMemo(
    () => Object.keys(errors).length > 0,
    [errors]
  );

  return (
    <MainLayout>
      <SettingsHeader onSave={handleSave} saving={loading} />
      <CompanySettings
        formData={data}
        errors={errors}
        onChange={handleChange}
      />
      <ProfileSettings
        formData={data}
        errors={errors}
        onChange={handleChange}
      />
      <NotificationSettings
        formData={data}
        onToggle={handleToggle}
      />
      <SecuritySettings
        formData={data}
        errors={errors}
        onChange={handleChange}
      />
      <ThemeSettings
        formData={data}
        onToggle={handleToggle}
      />

      <Snackbar
        open={successOpen}
        autoHideDuration={2500}
        onClose={() => setSuccessOpen(false)}
      >
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          Settings saved successfully.
        </Alert>
      </Snackbar>

      <Snackbar
        open={errorOpen || hasErrors}
        autoHideDuration={3000}
        onClose={() => {
          setErrorOpen(false);
        }}
      >
        <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
          {hasErrors
            ? "Please fix validation errors before saving."
            : "Failed to save settings."}
        </Alert>
      </Snackbar>
    </MainLayout>
  );
}