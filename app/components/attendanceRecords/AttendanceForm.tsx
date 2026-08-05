"use client";

import { MenuItem, TextField } from "@mui/material";
import { Grid } from "@mui/material";

import { departments } from "../../constants/departmentsValues";
import { AttendanceRecord } from "../../redux/slices/attendanceSlice";

interface AttendanceFormProps {
  formData: AttendanceRecord;
  onChange: (
    field: keyof AttendanceRecord,
    value: string | number
  ) => void;
}

const statusOptions: AttendanceRecord["status"][] = [
  "Present",
  "Absent",
  "Late",
  "Half Day",
];

export default function AttendanceForm({
  formData,
  onChange,
}: AttendanceFormProps) {
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

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          label="Check In"
          placeholder="09:00 AM"
          value={formData.checkIn}
          onChange={(e) => onChange("checkIn", e.target.value)}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          label="Check Out"
          placeholder="06:00 PM"
          value={formData.checkOut}
          onChange={(e) => onChange("checkOut", e.target.value)}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          fullWidth
          label="Working Hours"
          placeholder="9h 00m"
          value={formData.workingHours}
          onChange={(e) =>
            onChange("workingHours", e.target.value)
          }
        />
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
              e.target.value as AttendanceRecord["status"]
            )
          }
        >
          {statusOptions.map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );
}
