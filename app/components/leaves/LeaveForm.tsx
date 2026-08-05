"use client";

import { Grid, MenuItem, TextField } from "@mui/material";

import { departments } from "../../constants/departmentsValues";
import { LeaveRecord } from "../../redux/slices/leaveSlice";

interface LeaveFormProps {
  formData: LeaveRecord;
  onChange: (
    field: keyof LeaveRecord,
    value: string | number
  ) => void;
}

const leaveTypes: LeaveRecord["leaveType"][] = [
  "Casual",
  "Sick",
  "Earned",
];

const leaveStatuses: LeaveRecord["status"][] = [
  "Pending",
  "Approved",
  "Rejected",
];

export default function LeaveForm({
  formData,
  onChange,
}: LeaveFormProps) {
  return (
    <Grid container spacing={2} mt={1}>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Employee Name"
          value={formData.employeeName}
          onChange={(e) =>
            onChange("employeeName", e.target.value)
          }
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          select
          fullWidth
          label="Department"
          value={formData.department}
          onChange={(e) =>
            onChange("department", e.target.value)
          }
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
          select
          fullWidth
          label="Leave Type"
          value={formData.leaveType}
          onChange={(e) =>
            onChange(
              "leaveType",
              e.target.value as LeaveRecord["leaveType"]
            )
          }
        >
          {leaveTypes.map((leaveType) => (
            <MenuItem key={leaveType} value={leaveType}>
              {leaveType}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          select
          fullWidth
          label="Status"
          value={formData.status}
          onChange={(e) =>
            onChange(
              "status",
              e.target.value as LeaveRecord["status"]
            )
          }
        >
          {leaveStatuses.map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          type="date"
          fullWidth
          label="From Date"
          InputLabelProps={{ shrink: true }}
          value={formData.fromDate}
          onChange={(e) =>
            onChange("fromDate", e.target.value)
          }
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          type="date"
          fullWidth
          label="To Date"
          InputLabelProps={{ shrink: true }}
          value={formData.toDate}
          onChange={(e) => onChange("toDate", e.target.value)}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          type="number"
          fullWidth
          label="Days"
          value={formData.days}
          onChange={(e) =>
            onChange("days", Number(e.target.value))
          }
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <TextField
          fullWidth
          multiline
          minRows={3}
          label="Reason"
          value={formData.reason}
          onChange={(e) => onChange("reason", e.target.value)}
        />
      </Grid>
    </Grid>
  );
}
