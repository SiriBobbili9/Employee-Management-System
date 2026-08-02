"use client";

import { Box, MenuItem, TextField } from "@mui/material";

export default function AttendanceFilters() {
  return (
    <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
      <TextField type="date" label="Date" InputLabelProps={{ shrink: true }} />

      <TextField select label="Status" defaultValue="" sx={{ minWidth: 180 }}>
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Present">Present</MenuItem>
        <MenuItem value="Absent">Absent</MenuItem>
        <MenuItem value="Late">Late</MenuItem>
        <MenuItem value="Half Day">Half Day</MenuItem>
      </TextField>
    </Box>
  );
}