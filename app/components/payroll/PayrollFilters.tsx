"use client";

import { Box, MenuItem, TextField } from "@mui/material";

export default function PayrollFilters() {
  return (
    <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
      <TextField
        fullWidth
        label="Search Employee"
        placeholder="Search by employee name..."
      />

      <TextField
        select
        label="Status"
        defaultValue=""
        sx={{ width: 220 }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Paid">Paid</MenuItem>
        <MenuItem value="Pending">Pending</MenuItem>
      </TextField>
    </Box>
  );
}