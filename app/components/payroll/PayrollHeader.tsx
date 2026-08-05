"use client";

import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface PayrollHeaderProps {
  onAdd?: () => void;
}

export default function PayrollHeader({
  onAdd,
}: PayrollHeaderProps) {
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
        onClick={onAdd}
      >
        Generate Payroll
      </Button>
    </Box>
  );
}