"use client";

import { Box, TextField } from "@mui/material";

export default function DepartmentSearch() {
  return (
    <Box sx={{ mb: 3 }}>
      <TextField
        fullWidth
        label="Search Department"
        placeholder="Search by department name..."
      />
    </Box>
  );
}