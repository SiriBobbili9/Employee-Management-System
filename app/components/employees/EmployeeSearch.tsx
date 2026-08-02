"use client";

import {
  Box,
  MenuItem,
  TextField,
} from "@mui/material";

export default function EmployeeSearch() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        mb: 3,
      }}
    >
      <TextField
        fullWidth
        label="Search Employee"
        placeholder="Search by name..."
      />

      <TextField
        select
        label="Department"
        defaultValue=""
        sx={{ width: 220 }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Engineering">
          Engineering
        </MenuItem>
        <MenuItem value="HR">
          HR
        </MenuItem>
        <MenuItem value="Finance">
          Finance
        </MenuItem>
        <MenuItem value="Sales">
          Sales
        </MenuItem>
      </TextField>
    </Box>
  );
}