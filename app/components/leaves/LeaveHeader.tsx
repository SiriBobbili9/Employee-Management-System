"use client";

import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function LeaveHeader() {
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
          Leave Management
        </Typography>

        <Typography color="text.secondary">
          Manage employee leave requests.
        </Typography>
      </Box>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
      >
        Apply Leave
      </Button>
    </Box>
  );
}