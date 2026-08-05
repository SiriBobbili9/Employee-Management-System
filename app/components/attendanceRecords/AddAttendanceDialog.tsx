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

import { useAppDispatch } from "../../redux/hooks";
import { createAttendance } from "../../redux/thunks/attendanceThunk";
import {
  AttendanceRecord,
} from "../../redux/slices/attendanceSlice";
import AttendanceForm from "./AttendanceForm";

interface AddAttendanceDialogProps {
  open: boolean;
  onClose: () => void;
}

const initialFormData: AttendanceRecord = {
  id: 0,
  employeeName: "",
  department: "",
  checkIn: "",
  checkOut: "",
  workingHours: "",
  status: "Present",
};

export default function AddAttendanceDialog({
  open,
  onClose,
}: AddAttendanceDialogProps) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] =
    useState<AttendanceRecord>(initialFormData);

  const handleChange = (
    field: keyof AttendanceRecord,
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

      await dispatch(createAttendance(formData)).unwrap();

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
      <DialogTitle>Add Attendance</DialogTitle>

      <DialogContent dividers>
        <AttendanceForm formData={formData} onChange={handleChange} />
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
