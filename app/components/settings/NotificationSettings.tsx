"use client";

import {
  Paper,
  Typography,
  FormControlLabel,
  Switch,
  Stack,
} from "@mui/material";

export default function NotificationSettings() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3, mb: 3 }}>
      <Typography variant="h6" fontWeight="bold" mb={3}>
        Notification Settings
      </Typography>

      <Stack spacing={2}>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Email Notifications"
        />

        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Push Notifications"
        />

        <FormControlLabel
          control={<Switch />}
          label="SMS Notifications"
        />
      </Stack>
    </Paper>
  );
}