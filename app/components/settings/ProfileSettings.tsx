"use client";

import {
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";

export default function ProfileSettings() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3, mb: 3 }}>
      <Typography variant="h6" fontWeight="bold" mb={3}>
        Profile Settings
      </Typography>

      <Stack spacing={2}>
        <TextField label="Full Name" fullWidth />
        <TextField label="Email" fullWidth />
        <TextField label="Phone Number" fullWidth />

        <Button variant="contained">
          Update Profile
        </Button>
      </Stack>
    </Paper>
  );
}