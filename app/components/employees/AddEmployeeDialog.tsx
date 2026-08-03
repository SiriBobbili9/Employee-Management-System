"use client";

import { useRef, useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import EmployeeForm from "./EmployeeForm";
import { Employee } from "../../redux/slices/employeeSlice";
import { useAppDispatch } from "../../redux/hooks";
import { createEmployee } from "../../redux/thunks/employeeThunk";
import SimpleReactValidator from "simple-react-validator";

interface AddEmployeeDialogProps {
  open: boolean;
  onClose: () => void;
}

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

export default function AddEmployeeDialog({
  open,
  onClose,
}: AddEmployeeDialogProps) {
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

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Add Employee</DialogTitle>

      <DialogContent dividers>
        <EmployeeForm
          formData={formData}
          onChange={handleChange}
          validator={validator}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <LoadingButton
          loading={loading}
          variant="contained"
          onClick={handleSubmit}
        >
          Save
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
