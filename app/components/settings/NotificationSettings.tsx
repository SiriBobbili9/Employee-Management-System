"use client";

import {
  Paper,
  Typography,
  FormControlLabel,
  Switch,
  Stack,
} from "@mui/material";
import { SettingsFormData } from "../../redux/slices/settingsSlice";

interface NotificationSettingsProps {
  formData: SettingsFormData;
  onToggle: (field: keyof SettingsFormData, value: boolean) => void;
}

export default function NotificationSettings({
  formData,
  onToggle,
}: NotificationSettingsProps) {
  return (
    <Paper sx={{ p: 3, borderRadius: 3, mb: 3 }}>
      <Typography variant="h6" fontWeight="bold" mb={3}>
        Notification Settings
      </Typography>

      <Stack spacing={2}>
        <FormControlLabel
          control={
            <Switch
              checked={formData.emailNotifications}
              onChange={(e) =>
                onToggle("emailNotifications", e.target.checked)
              }
            />
          }
          label="Email Notifications"
        />

        <FormControlLabel
          control={
            <Switch
              checked={formData.pushNotifications}
              onChange={(e) =>
                onToggle("pushNotifications", e.target.checked)
              }
            />
          }
          label="Push Notifications"
        />

        <FormControlLabel
          control={
            <Switch
              checked={formData.smsNotifications}
              onChange={(e) =>
                onToggle("smsNotifications", e.target.checked)
              }
            />
          }
          label="SMS Notifications"
        />
      </Stack>
    </Paper>
  );
}