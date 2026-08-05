"use client";

import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface LeaveHeaderProps {
  onAdd?: () => void;
}

export default function LeaveHeader({
  onAdd,
}: LeaveHeaderProps) {
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
        onClick={onAdd}
      >
        Apply Leave
      </Button>
    </Box>
  );
}