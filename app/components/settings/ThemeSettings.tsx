"use client";

import {
  Paper,
  Typography,
  FormControlLabel,
  Switch,
} from "@mui/material";

export default function ThemeSettings() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h6" fontWeight="bold" mb={3}>
        Appearance
      </Typography>

      <FormControlLabel
        control={<Switch />}
        label="Enable Dark Mode"
      />
    </Paper>
  );
}