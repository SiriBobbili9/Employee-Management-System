"use client";

import {
  Paper,
  Typography,
  TextField,
  Stack,
} from "@mui/material";
import { SettingsFormData } from "../../redux/slices/settingsSlice";

interface ProfileSettingsProps {
  formData: SettingsFormData;
  errors: Partial<Record<keyof SettingsFormData, string>>;
  onChange: (field: keyof SettingsFormData, value: string) => void;
}

export default function ProfileSettings({
  formData,
  errors,
  onChange,
}: ProfileSettingsProps) {
  return (
    <Paper sx={{ p: 3, borderRadius: 3, mb: 3 }}>
      <Typography variant="h6" fontWeight="bold" mb={3}>
        Profile Settings
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Full Name"
          fullWidth
          value={formData.fullName}
          onChange={(e) => onChange("fullName", e.target.value)}
          error={Boolean(errors.fullName)}
          helperText={errors.fullName}
        />
        <TextField
          label="Email"
          fullWidth
          value={formData.profileEmail}
          onChange={(e) => onChange("profileEmail", e.target.value)}
          error={Boolean(errors.profileEmail)}
          helperText={errors.profileEmail}
        />
        <TextField
          label="Phone Number"
          fullWidth
          value={formData.phoneNumber}
          onChange={(e) => onChange("phoneNumber", e.target.value)}
        />
      </Stack>
    </Paper>
  );
}