"use client";

import { useState } from "react";

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
import { createLeave } from "../../redux/thunks/leaveThunk";
import { LeaveRecord } from "../../redux/slices/leaveSlice";

interface AddLeaveDialogProps {
  open: boolean;
  onClose: () => void;
}

const initialFormData: LeaveRecord = {
  id: 0,
  employeeName: "",
  department: "",
  leaveType: "Casual",
  fromDate: "",
  toDate: "",
  days: 1,
  reason: "",
  status: "Pending",
};

export default function AddLeaveDialog({
  open,
  onClose,
}: AddLeaveDialogProps) {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<LeaveRecord>(initialFormData);

  const handleChange = (
    field: keyof LeaveRecord,
    value: string | number
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.employeeName.trim() || !formData.department.trim()) {
      return;
    }

    try {
      setLoading(true);

      await dispatch(createLeave(formData)).unwrap();

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
      <DialogTitle>Apply Leave</DialogTitle>

      <DialogContent dividers>
        <LeaveForm formData={formData} onChange={handleChange} />
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
