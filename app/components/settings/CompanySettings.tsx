"use client";

import {
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";

export default function CompanySettings() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3, mb: 3 }}>
      <Typography variant="h6" fontWeight="bold" mb={3}>
        Company Information
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField fullWidth label="Company Name" defaultValue="ABC Technologies" />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField fullWidth label="Company Email" defaultValue="hr@abc.com" />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField fullWidth label="Company Address" />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Button variant="contained">
            Save Company Settings
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}