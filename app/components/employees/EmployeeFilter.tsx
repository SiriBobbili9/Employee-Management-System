"use client";

import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import { departments } from "../../constants/departmentsValues";
import { employeeStatus } from "../../constants/employeeStatus";

interface EmployeeFiltersProps {
  filters: {
    search: string;
    department: string;
    status: string;
  };

  sortBy: string;

  onChange: (field: string, value: string) => void;

  onSortChange: (value: string) => void;
}

export default function EmployeeFilters({
  filters,
  onChange,
  onSortChange,
  sortBy,
}: EmployeeFiltersProps) {
  return (
    <Grid container spacing={2} mb={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          label="Search Employee"
          placeholder="Name, Email or Employee ID"
          value={filters.search}
          onChange={(e) => onChange("search", e.target.value)}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <FormControl fullWidth>
          <InputLabel>Department</InputLabel>

          <Select
            label="Department"
            value={filters.department}
            onChange={(e) => onChange("department", e.target.value)}
          >
            <MenuItem value="">All Departments</MenuItem>

            {departments.map((department) => (
              <MenuItem key={department} value={department}>
                {department}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>

          <Select
            label="Status"
            value={filters.status}
            onChange={(e) => onChange("status", e.target.value)}
          >
            <MenuItem value="">All Status</MenuItem>

            {employeeStatus.map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <FormControl fullWidth>
          <InputLabel>Sort By</InputLabel>

          <Select
            value={sortBy}
            label="Sort By"
            onChange={(e) => onSortChange(e.target.value)}
          >
            <MenuItem value="nameAsc">Name (A-Z)</MenuItem>

            <MenuItem value="nameDesc">Name (Z-A)</MenuItem>

            <MenuItem value="department">Department</MenuItem>

            <MenuItem value="employeeId">Employee ID</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}
