"use client";

import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface AttendanceHeaderProps {
  onAdd?: () => void;
}

export default function AttendanceHeader({
  onAdd,
}: AttendanceHeaderProps) {
  return (
    <Box
      sx={{
        mb: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box>
        <Typography variant="h4" fontWeight="bold">
          Attendance
        </Typography>

        <Typography color="text.secondary">
          Track employee attendance and working hours.
        </Typography>
      </Box>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={onAdd}
      >
        Add Attendance
      </Button>
    </Box>
  );
}