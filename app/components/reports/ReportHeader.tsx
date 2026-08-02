"use client";

import { Box, Button, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

export default function ReportHeader() {
  return (
    <Box
      sx={{
        mb: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h4" fontWeight="bold">
          Reports
        </Typography>

        <Typography color="text.secondary">
          Analyze employee, attendance, leave, and payroll reports.
        </Typography>
      </Box>

      <Button
        variant="contained"
        startIcon={<DownloadIcon />}
      >
        Export Reports
      </Button>
    </Box>
  );
}