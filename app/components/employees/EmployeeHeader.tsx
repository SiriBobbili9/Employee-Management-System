"use client";

import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useAppDispatch } from "../../redux/hooks";
import { addEmployee, Employee } from "../../redux/slices/employeeSlice";
import { createEmployee } from "../../redux/thunks/employeeThunk";
import { useRef, useState } from "react";
import AddEmployeeDialog from "./AddEmployeeDialog";
import SimpleReactValidator from "simple-react-validator";
import AddDialog from "@/app/common/AddDialog";
import EmployeeForm from "./EmployeeForm";

const initialFormData: Employee = {
  id: 0,
  employeeId: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  department: "",
  designation: "",
  status: "Active",
};

export default function EmployeeHeader() {
  const validator = useRef(
    new SimpleReactValidator({
      autoForceUpdate: {
        forceUpdate: () => {
          setRefresh((prev) => !prev);
        },
      },
    }),
  );

  const [, setRefresh] = useState(false);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<Employee>(initialFormData);

  const handleChange = (field: keyof Employee, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

 const handleSubmit = async () => {
  if (!validator.current.allValid()) {
    validator.current.showMessages();
    return;
  }

  try {
    setLoading(true);

    await dispatch(createEmployee(formData)).unwrap();

    validator.current.hideMessages();

    setFormData(initialFormData);

    onClose();
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddEmployee = () => {
    // dispatch(
    //   addEmployee({
    //     id: Date.now(),
    //     employeeId: "EMP999",
    //     firstName: "Siri",
    //     lastName: "Bobbili",
    //     email: "siri@example.com",
    //     phone: "9999999999",
    //     department: "Engineering",
    //     designation: "React Developer",
    //     status: "Active",
    //   })
    // );
    setOpen(true);
  };
  return (
    <Box
      sx={{
        mt: 3,
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
          <AddEmployeeDialog
        open={open}
        onClose={handleClose}
      />        
      {/* <AddEmployeeDialog open={open} onClose={handleClose} /> */}
    </Box>
  );
}
