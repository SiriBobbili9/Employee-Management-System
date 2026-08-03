"use client";

import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useAppDispatch } from "../../redux/hooks";
import { addEmployee } from "../../redux/slices/employeeSlice";

export default function EmployeeHeader() {
  const dispatch = useAppDispatch();

const handleAddEmployee = () => {
  dispatch(
    addEmployee({
      id: Date.now(),
      employeeId: "EMP999",
      firstName: "Siri",
      lastName: "Bobbili",
      email: "siri@example.com",
      phone: "9999999999",
      department: "Engineering",
      designation: "React Developer",
      status: "Active",
    })
  );
};
  return (
    <Box
      sx={{
        mb: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h4" fontWeight="bold">
          Employees
        </Typography>

        <Typography color="text.secondary">
          Manage your organization's employees.
        </Typography>
      </Box>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleAddEmployee}
      >
        Add Employee
      </Button>
    </Box>
  );
}