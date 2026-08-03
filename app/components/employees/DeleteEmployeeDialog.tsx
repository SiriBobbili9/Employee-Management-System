"use client";

import { useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

import { LoadingButton } from "@mui/lab";

import { Employee } from "../../redux/slices/employeeSlice";
import { useAppDispatch } from "../../redux/hooks";
import { deleteEmployee } from "../../redux/thunks/employeeThunk";

interface DeleteEmployeeDialogProps {
  open: boolean;
  employee: Employee | null;
  onClose: () => void;
}

export default function DeleteEmployeeDialog({
  open,
  employee,
  onClose,
}: DeleteEmployeeDialogProps) {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!employee) return;

    try {
      setLoading(true);

      await dispatch(deleteEmployee(employee.id)).unwrap();

      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle>Delete Employee</DialogTitle>

      <DialogContent>
        <Typography>
          Are you sure you want to delete{" "}
          <strong>
            {employee?.firstName} {employee?.lastName}
          </strong>
          ?
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