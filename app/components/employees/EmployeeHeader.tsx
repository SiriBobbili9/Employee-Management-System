"use client";

import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function EmployeeHeader() {
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
          Employees
        </Typography>

        <Typography color="text.secondary">
          Manage your organization's employees.
        </Typography>
      </Box>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
      >
        Add Employee
      </Button>
    </Box>
  );
}