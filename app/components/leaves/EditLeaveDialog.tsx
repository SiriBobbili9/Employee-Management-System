"use client";

import { useEffect, useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import LeaveForm from "./LeaveForm";

import { useAppDispatch } from "../../redux/hooks";
import { updateLeave } from "../../redux/thunks/leaveThunk";
import { LeaveRecord } from "../../redux/slices/leaveSlice";

interface EditLeaveDialogProps {
  open: boolean;
  leave: LeaveRecord | null;
  onClose: () => void;
}

export default function EditLeaveDialog({
  open,
  leave,
  onClose,
}: EditLeaveDialogProps) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<LeaveRecord | null>(null);

  useEffect(() => {
    if (leave) {
      setFormData(leave);
    }
  }, [leave]);

  const handleChange = (
    field: keyof LeaveRecord,
    value: string | number
  ) => {
    if (!formData) return;

    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleUpdate = async () => {
    if (!formData) return;

    try {
      setLoading(true);

      await dispatch(updateLeave(formData)).unwrap();

      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!formData) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Edit Leave</DialogTitle>

      <DialogContent dividers>
        <LeaveForm formData={formData} onChange={handleChange} />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

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
