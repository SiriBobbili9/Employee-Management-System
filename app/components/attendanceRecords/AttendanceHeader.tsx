"use client";

import { Box, Typography } from "@mui/material";

export default function AttendanceHeader() {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h4" fontWeight="bold">
        Attendance
      </Typography>

      <Typography color="text.secondary">
        Track employee attendance and working hours.
      </Typography>
    </Box>
  );
}