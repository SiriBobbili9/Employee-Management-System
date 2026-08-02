"use client";

import { Box, MenuItem, TextField } from "@mui/material";

export default function LeaveFilters() {
  return (
    <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
      <TextField
        fullWidth
        label="Search Employee"
        placeholder="Search..."
      />

      <TextField
        select
        label="Status"
        defaultValue=""
        sx={{ width: 220 }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Pending">Pending</MenuItem>
        <MenuItem value="Approved">Approved</MenuItem>
        <MenuItem value="Rejected">Rejected</MenuItem>
      </TextField>
    </Box>
  );
}