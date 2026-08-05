"use client";

import {
  Paper,
  Typography,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { SettingsFormData } from "../../redux/slices/settingsSlice";

interface ThemeSettingsProps {
  formData: SettingsFormData;
  onToggle: (field: keyof SettingsFormData, value: boolean) => void;
}

export default function ThemeSettings({
  formData,
  onToggle,
}: ThemeSettingsProps) {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h6" fontWeight="bold" mb={3}>
        Appearance
      </Typography>

      <FormControlLabel
        control={
          <Switch
            checked={formData.darkMode}
            onChange={(e) =>
              onToggle("darkMode", e.target.checked)
            }
          />
        }
        label="Enable Dark Mode"
      />
    </Paper>
  );
}