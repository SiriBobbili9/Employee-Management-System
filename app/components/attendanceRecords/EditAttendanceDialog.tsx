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

import { useAppDispatch } from "../../redux/hooks";
import { updateAttendance } from "../../redux/thunks/attendanceThunk";
import {
  AttendanceRecord,
} from "../../redux/slices/attendanceSlice";
import AttendanceForm from "./AttendanceForm";

interface EditAttendanceDialogProps {
  open: boolean;
  attendance: AttendanceRecord | null;
  onClose: () => void;
}

export default function EditAttendanceDialog({
  open,
  attendance,
  onClose,
}: EditAttendanceDialogProps) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] =
    useState<AttendanceRecord | null>(null);

  useEffect(() => {
    if (attendance) {
      setFormData(attendance);
    }
  }, [attendance]);

  const handleChange = (
    field: keyof AttendanceRecord,
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

      await dispatch(updateAttendance(formData)).unwrap();

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
      <DialogTitle>Edit Attendance</DialogTitle>

      <DialogContent dividers>
        <AttendanceForm formData={formData} onChange={handleChange} />
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
