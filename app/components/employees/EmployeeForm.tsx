"use client";

import {
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Employee } from "../../redux/slices/employeeSlice";
import { departments } from "../../constants/departmentsValues";
import { employeeStatus } from "../../constants/employeeStatus";
import SimpleReactValidator from "simple-react-validator";

interface EmployeeFormProps {
  formData: Employee;
  onChange: (field: keyof Employee, value: string) => void;

  validator: React.MutableRefObject<SimpleReactValidator>;
}

export default function EmployeeForm({
  formData,
  onChange,
  validator,
}: EmployeeFormProps) {
  return (
    <Grid container spacing={2}>
      {/* Employee ID */}
      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField
          fullWidth
          label="Employee ID"
          value={formData.employeeId}
          onChange={(e) => onChange("employeeId", e.target.value)}
          error={
            !!validator.current.message(
              "Employee ID",
              formData.employeeId,
              "required",
            )
          }
          helperText={validator.current.message(
            "Employee ID",
            formData.employeeId,
            "required",
          )}
        />
      </Grid>

      {/* First Name */}
      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField
          fullWidth
          label="First Name"
          value={formData.firstName}
          onChange={(e) => onChange("firstName", e.target.value)}
          error={
            !!validator.current.message(
              "First Name",
              formData.firstName,
              "required",
            )
          }
          helperText={validator.current.message(
            "First Name",
            formData.firstName,
            "required",
          )}
        />
      </Grid>

      {/* Last Name */}
      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField
          fullWidth
          label="Last Name"
          value={formData.lastName}
          onChange={(e) => onChange("lastName", e.target.value)}
        />
      </Grid>

      {/* Email */}
      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField
          fullWidth
          type="email"
          label="Email"
          value={formData.email}
          onChange={(e) => onChange("email", e.target.value)}
          error={
            !!validator.current.message(
              "Email",
              formData.email,
              "required|email",
            )
          }
          helperText={validator.current.message(
            "Email",
            formData.email,
            "required|email",
          )}
        />
      </Grid>

      {/* Phone */}
      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField
          fullWidth
          label="Phone Number"
          value={formData.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          error={
            !!validator.current.message(
              "Phone Number",
              formData.phone,
              "required|numeric|min:10|max:10",
            )
          }
          helperText={validator.current.message(
            "Phone Number",
            formData.phone,
            "required|numeric|min:10|max:10",
          )}
        />
      </Grid>

      {/* Department */}
      <Grid size={{ xs: 12, sm: 6 }}>
        <FormControl
          fullWidth
          error={
            !!validator.current.message(
              "Department",
              formData.department,
              "required",
            )
          }
        >
          <InputLabel>Department</InputLabel>

          <Select
            label="Department"
            value={formData.department}
            onChange={(e) => onChange("department", e.target.value)}
          >
            {/* <MenuItem value="Engineering">Engineering</MenuItem>
            <MenuItem value="Human Resources">Human Resources</MenuItem>
            <MenuItem value="Finance">Finance</MenuItem>
            <MenuItem value="Sales">Sales</MenuItem>
            <MenuItem value="Marketing">Marketing</MenuItem>
            <MenuItem value="IT Support">IT Support</MenuItem> */}
            {departments.map((dept) => (
              <MenuItem key={dept} value={dept}>
                {dept}
              </MenuItem>
            ))}
          </Select>

          <FormHelperText>
            {validator.current.message(
              "Department",
              formData.department,
              "required",
            )}
          </FormHelperText>
        </FormControl>
      </Grid>

      {/* Designation */}
      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField
          fullWidth
          label="Designation"
          value={formData.designation}
          onChange={(e) => onChange("designation", e.target.value)}
          error={
            !!validator.current.message(
              "Designation",
              formData.designation,
              "required",
            )
          }
          helperText={validator.current.message(
            "Designation",
            formData.designation,
            "required",
          )}
        />
      </Grid>

      {/* Status */}
      <Grid size={{ xs: 12, sm: 6 }}>
        <FormControl
          fullWidth
          error={
            !!validator.current.message("Status", formData.status, "required")
          }
        >
          <InputLabel>Status</InputLabel>

          <Select
            label="Status"
            value={formData.status}
            onChange={(e) =>
              onChange("status", e.target.value as Employee["status"])
            }
          >
                {/* <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
                <MenuItem value="On Leave">On Leave</MenuItem> */}
                {employeeStatus.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
          </Select>

          <FormHelperText>
            {validator.current.message("Status", formData.status, "required")}
          </FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
}
