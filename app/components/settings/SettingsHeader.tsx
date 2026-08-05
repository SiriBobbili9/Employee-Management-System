"use client";

import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Typography } from "@mui/material";

interface SettingsHeaderProps {
  onSave?: () => void;
  saving?: boolean;
}

export default function SettingsHeader({
  onSave,
  saving = false,
}: SettingsHeaderProps) {
  return (
    <Box
      sx={{
        mb: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Settings
        </Typography>

        <Typography color="text.secondary">
          Manage your application preferences and company configuration.
        </Typography>
      </Box>

      <LoadingButton
        variant="contained"
        startIcon={<SaveIcon />}
        loading={saving}
        onClick={onSave}
      >
        Save Settings
      </LoadingButton>
    </Box>
  );
}