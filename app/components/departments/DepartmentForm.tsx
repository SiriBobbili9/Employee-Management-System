"use client";

import {
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";
import SimpleReactValidator from "simple-react-validator";

import { managers } from "../../constants/departments/managers";
import { Department } from "../../redux/slices/departmentSlice";

interface DepartmentFormProps {
  formData: Department;
  onChange: (
    field: keyof Department,
    value: string | number
  ) => void;
  validator: React.MutableRefObject<SimpleReactValidator>;
}

export default function DepartmentForm({
  formData,
  onChange,
  validator,
}: DepartmentFormProps) {
  return (
    <Grid container spacing={2} mt={1}>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Department Name"
          value={formData.departmentName}
          onChange={(e) =>
            onChange("departmentName", e.target.value)
          }
          error={!!validator.current.message(
            "Department Name",
            formData.departmentName,
            "required"
          )}
          helperText={validator.current.message(
            "Department Name",
            formData.departmentName,
            "required"
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          select
          fullWidth
          label="Manager"
          value={formData.manager}
          onChange={(e) =>
            onChange("manager", e.target.value)
          }
          error={!!validator.current.message(
            "Manager",
            formData.manager,
            "required"
          )}
          helperText={validator.current.message(
            "Manager",
            formData.manager,
            "required"
          )}
        >
          {managers.map((manager) => (
            <MenuItem
              key={manager}
              value={manager}
            >
              {manager}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          type="number"
          label="Employee Count"
          value={formData.employeesCount}
          onChange={(e) =>
            onChange(
              "employeesCount",
              Number(e.target.value)
            )
          }
          error={!!validator.current.message(
            "Employee Count",
            formData.employeesCount,
            "required|numeric"
          )}
          helperText={validator.current.message(
            "Employee Count",
            formData.employeesCount,
            "required|numeric"
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          fullWidth
          label="Location"
          value={formData.location}
          onChange={(e) =>
            onChange("location", e.target.value)
          }
          error={!!validator.current.message(
            "Location",
            formData.location,
            "required"
          )}
          helperText={validator.current.message(
            "Location",
            formData.location,
            "required"
          )}
        />
      </Grid>
    </Grid>
  );
}