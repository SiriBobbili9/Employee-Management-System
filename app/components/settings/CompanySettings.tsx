"use client";

import {
  Paper,
  Typography,
  Grid,
  TextField,
} from "@mui/material";
import { SettingsFormData } from "../../redux/slices/settingsSlice";

interface CompanySettingsProps {
  formData: SettingsFormData;
  errors: Partial<Record<keyof SettingsFormData, string>>;
  onChange: (field: keyof SettingsFormData, value: string) => void;
}

export default function CompanySettings({
  formData,
  errors,
  onChange,
}: CompanySettingsProps) {
  return (
    <Paper sx={{ p: 3, borderRadius: 3, mb: 3 }}>
      <Typography variant="h6" fontWeight="bold" mb={3}>
        Company Information
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Company Name"
            value={formData.companyName}
            onChange={(e) =>
              onChange("companyName", e.target.value)
            }
            error={Boolean(errors.companyName)}
            helperText={errors.companyName}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Company Email"
            value={formData.companyEmail}
            onChange={(e) =>
              onChange("companyEmail", e.target.value)
            }
            error={Boolean(errors.companyEmail)}
            helperText={errors.companyEmail}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            label="Company Address"
            value={formData.companyAddress}
            onChange={(e) =>
              onChange("companyAddress", e.target.value)
            }
          />
        </Grid>
      </Grid>
    </Paper>
  );
}