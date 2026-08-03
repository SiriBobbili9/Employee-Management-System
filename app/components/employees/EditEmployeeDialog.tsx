"use client";

import { useEffect, useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import { LoadingButton } from "@mui/lab";

import EmployeeForm from "./EmployeeForm";

import { Employee } from "../../redux/slices/employeeSlice";
import { useAppDispatch } from "../../redux/hooks";
import { updateEmployee } from "../../redux/thunks/employeeThunk";

interface EditEmployeeDialogProps {
  open: boolean;
  employee: Employee | null;
  onClose: () => void;
}

export default function EditEmployeeDialog({
  open,
  employee,
  onClose,
}: EditEmployeeDialogProps) {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);

  const [refresh, setRefresh] = useState(false);

  const [formData, setFormData] =
    useState<Employee | null>(null);

  const validator = useRef(
    new SimpleReactValidator({
      autoForceUpdate: {
        forceUpdate: () => {
          setRefresh((prev) => !prev);
        },
      },
    })
  );

  useEffect(() => {
    if (employee) {
      setFormData(employee);
    }
  }, [employee]);

  const handleChange = (
    field: keyof Employee,
    value: string
  ) => {
    if (!formData) return;

    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleUpdate = async () => {
    if (!validator.current.allValid()) {
      validator.current.showMessages();
      return;
    }

    if (!formData) return;

    try {
      setLoading(true);

      await dispatch(
        updateEmployee(formData)
      ).unwrap();

      validator.current.hideMessages();

      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!formData) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>
        Edit Employee
      </DialogTitle>

      <DialogContent dividers>
        <EmployeeForm
          formData={formData}
          onChange={handleChange}
          validator={validator}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          Cancel
        </Button>

        <LoadingButton
          loading={loading}
          variant="contained"
          onClick={handleUpdate}
        >
          Update
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}