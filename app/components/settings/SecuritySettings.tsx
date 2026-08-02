"use client";

import {
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";

export default function SecuritySettings() {
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
        />

        <TextField
          type="password"
          label="New Password"
          fullWidth
        />

        <TextField
          type="password"
          label="Confirm Password"
          fullWidth
        />

        <Button variant="contained">
          Update Password
        </Button>
      </Stack>
    </Paper>
  );
}