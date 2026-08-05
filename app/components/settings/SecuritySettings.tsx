"use client";

import {
  Paper,
  Typography,
  TextField,
  Stack,
} from "@mui/material";
import { SettingsFormData } from "../../redux/slices/settingsSlice";

interface SecuritySettingsProps {
  formData: SettingsFormData;
  errors: Partial<Record<keyof SettingsFormData, string>>;
  onChange: (field: keyof SettingsFormData, value: string) => void;
}

export default function SecuritySettings({
  formData,
  errors,
  onChange,
}: SecuritySettingsProps) {
  return (
    <Paper sx={{ p: 3, borderRadius: 3, mb: 3 }}>
      <Typography variant="h6" fontWeight="bold" mb={3}>
        Change Password
      </Typography>

      <Stack spacing={2}>
        <TextField
          type="password"
          label="Current Password"
          fullWidth
          value={formData.currentPassword}
          onChange={(e) =>
            onChange("currentPassword", e.target.value)
          }
          error={Boolean(errors.currentPassword)}
          helperText={errors.currentPassword}
        />

        <TextField
          type="password"
          label="New Password"
          fullWidth
          value={formData.newPassword}
          onChange={(e) => onChange("newPassword", e.target.value)}
          error={Boolean(errors.newPassword)}
          helperText={errors.newPassword}
        />

        <TextField
          type="password"
          label="Confirm Password"
          fullWidth
          value={formData.confirmPassword}
          onChange={(e) =>
            onChange("confirmPassword", e.target.value)
          }
          error={Boolean(errors.confirmPassword)}
          helperText={errors.confirmPassword}
        />
      </Stack>
    </Paper>
  );
}