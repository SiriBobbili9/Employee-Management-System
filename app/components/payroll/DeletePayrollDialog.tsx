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

import { useAppDispatch } from "../../redux/hooks";
import { deletePayroll } from "../../redux/thunks/payrollThunk";
import { PayrollRecord } from "../../redux/slices/payrollSlice";

interface DeletePayrollDialogProps {
  open: boolean;
  payroll: PayrollRecord | null;
  onClose: () => void;
}

export default function DeletePayrollDialog({
  open,
  payroll,
  onClose,
}: DeletePayrollDialogProps) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!payroll) return;

    try {
      setLoading(true);

      await dispatch(deletePayroll(payroll.id)).unwrap();

      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>Delete Payroll</DialogTitle>

      <DialogContent>
        <Typography>
          Are you sure you want to delete payroll for <strong>{payroll?.employeeName}</strong>?
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

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
