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

import { Department } from "../../redux/slices/departmentSlice";
import { useAppDispatch } from "../../redux/hooks";
import { updateDepartment } from "../../redux/thunks/departmentThunk";
import DepartmentForm from "./DepartmentForm";

interface EditDepartmentDialogProps {
  open: boolean;
  department: Department | null;
  onClose: () => void;
}

export default function EditDepartmentDialog({
  open,
  department,
  onClose,
}: EditDepartmentDialogProps) {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);

  const [refresh, setRefresh] = useState(false);

  const [formData, setFormData] =
    useState<Department | null>(null);

  const validator = useRef(
    new SimpleReactValidator({
      autoForceUpdate: {
        forceUpdate: () => setRefresh((prev) => !prev),
      },
    })
  );

  useEffect(() => {
    if (department) {
      setFormData(department);
    }
  }, [department]);

  const handleChange = (
    field: keyof Department,
    value: string | number
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

      await dispatch(updateDepartment(formData)).unwrap();

      validator.current.hideMessages();

      onClose();
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
      <DialogTitle>Edit Department</DialogTitle>

      <DialogContent dividers>
        <DepartmentForm
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