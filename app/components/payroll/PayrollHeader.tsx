"use client";

import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function PayrollHeader() {
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
          Payroll
        </Typography>

        <Typography color="text.secondary">
          Manage employee salary and payroll details.
        </Typography>
      </Box>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
      >
        Generate Payroll
      </Button>
    </Box>
  );
}