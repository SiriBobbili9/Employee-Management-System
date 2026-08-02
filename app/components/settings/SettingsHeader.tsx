"use client";

import { Box, Typography } from "@mui/material";

export default function SettingsHeader() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" fontWeight="bold">
        Settings
      </Typography>

      <Typography color="text.secondary">
        Manage your application preferences and company configuration.
      </Typography>
    </Box>
  );
}