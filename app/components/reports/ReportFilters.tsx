"use client";

import { Box, MenuItem, TextField } from "@mui/material";

export default function ReportFilters() {
  return (
    <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
      <TextField
        fullWidth
        label="Search Report"
        placeholder="Search reports..."
      />

      <TextField
        select
        label="Report Type"
        defaultValue=""
        sx={{ width: 220 }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Employee">Employee</MenuItem>
        <MenuItem value="Attendance">Attendance</MenuItem>
        <MenuItem value="Leave">Leave</MenuItem>
        <MenuItem value="Payroll">Payroll</MenuItem>
      </TextField>
    </Box>
  );
}