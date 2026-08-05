"use client";

import { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";

import { LoadingButton } from "@mui/lab";

import { Department } from "../../redux/slices/departmentSlice";
import { useAppDispatch } from "../../redux/hooks";
import { deleteDepartment } from "../../redux/thunks/departmentThunk";

interface DeleteDepartmentDialogProps {
  open: boolean;
  department: Department | null;
  onClose: () => void;
}

export default function DeleteDepartmentDialog({
  open,
  department,
  onClose,
}: DeleteDepartmentDialogProps) {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!department) return;

    try {
      setLoading(true);

      await dispatch(
        deleteDepartment(department.id)
      ).unwrap();

      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle>
        Delete Department
      </DialogTitle>

      <DialogContent>
        <Typography>
          Are you sure you want to delete{" "}
          <strong>{department?.departmentName}</strong>?
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          Cancel
        </Button>

        <LoadingButton
          color="error"
          variant="contained"
          loading={loading}
          onClick={handleDelete}
        >
          Delete
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}