"use client";

import { Grid, MenuItem, TextField } from "@mui/material";

import { departments } from "../../constants/departmentsValues";
import { PayrollRecord } from "../../redux/slices/payrollSlice";

type PayrollNumericFields =
  | "basicSalary"
  | "hra"
  | "allowances"
  | "deductions"
  | "bonus"
  | "netSalary";

export type PayrollFormData = Omit<
  PayrollRecord,
  PayrollNumericFields
> & {
  basicSalary: number | "";
  hra: number | "";
  allowances: number | "";
  deductions: number | "";
  bonus: number | "";
  netSalary: number | "";
};

interface PayrollFormProps {
  formData: PayrollFormData;
  onChange: (
    field: keyof PayrollFormData,
    value: string | number
  ) => void;
}

const statuses: PayrollRecord["status"][] = ["Paid", "Pending"];

export default function PayrollForm({ formData, onChange }: PayrollFormProps) {
  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Employee ID"
          value={formData.employeeId}
          onChange={(e) => onChange("employeeId", e.target.value)}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Employee Name"
          value={formData.employeeName}
          onChange={(e) => onChange("employeeName", e.target.value)}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          select
          fullWidth
          label="Department"
          value={formData.department}
          onChange={(e) => onChange("department", e.target.value)}
        >
          {departments.map((department) => (
            <MenuItem key={department} value={department}>
              {department}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Payment Month"
          placeholder="August 2026"
          value={formData.paymentMonth}
          onChange={(e) => onChange("paymentMonth", e.target.value)}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          type="number"
          fullWidth
          label="Basic Salary"
          value={formData.basicSalary}
          onChange={(e) => onChange("basicSalary", e.target.value)}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          type="number"
          fullWidth
          label="HRA"
          value={formData.hra}
          onChange={(e) => onChange("hra", e.target.value)}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          type="number"
          fullWidth
          label="Allowances"
          value={formData.allowances}
          onChange={(e) => onChange("allowances", e.target.value)}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          type="number"
          fullWidth
          label="Deductions"
          value={formData.deductions}
          onChange={(e) => onChange("deductions", e.target.value)}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          type="number"
          fullWidth
          label="Bonus"
          value={formData.bonus}
          onChange={(e) => onChange("bonus", e.target.value)}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          type="number"
          fullWidth
          label="Net Salary"
          value={formData.netSalary}
          onChange={(e) => onChange("netSalary", e.target.value)}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          select
          fullWidth
          label="Status"
          value={formData.status}
          onChange={(e) =>
            onChange("status", e.target.value as PayrollRecord["status"])
          }
        >
          {statuses.map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );
}
