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
import { deleteLeave } from "../../redux/thunks/leaveThunk";
import { LeaveRecord } from "../../redux/slices/leaveSlice";

interface DeleteLeaveDialogProps {
  open: boolean;
  leave: LeaveRecord | null;
  onClose: () => void;
}

export default function DeleteLeaveDialog({
  open,
  leave,
  onClose,
}: DeleteLeaveDialogProps) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!leave) return;

    try {
      setLoading(true);

      await dispatch(deleteLeave(leave.id)).unwrap();

      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>Delete Leave</DialogTitle>

      <DialogContent>
        <Typography>
          Are you sure you want to delete leave for <strong>{leave?.employeeName}</strong>?
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
