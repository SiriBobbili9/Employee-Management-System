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

import DepartmentForm from "./DepartmentForm";
import { Department } from "../../redux/slices/departmentSlice";
import { useAppDispatch } from "../../redux/hooks";
import SimpleReactValidator from "simple-react-validator";
import { createDepartment } from "@/app/redux/thunks/departmentThunk";

interface AddDepartmentDialogProps {
  open: boolean;
  onClose: () => void;
}

const initialFormData: Department = {
  id: 0,
  departmentName: "",
  departmentCode: "",
  manager: "",
  employeesCount: 0,
  status: "Active",
  location: "",
};

export default function AddDepartmentDialog({
  open,
  onClose,
}: AddDepartmentDialogProps) {
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

  const [formData, setFormData] = useState<Department>(initialFormData);

  const handleChange = (field: keyof Department, value: string) => {
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

    await dispatch(createDepartment(formData)).unwrap();

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
      <DialogTitle>Add Department</DialogTitle>

      <DialogContent dividers>
        <DepartmentForm         
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
