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
import { deleteAttendance } from "../../redux/thunks/attendanceThunk";
import { AttendanceRecord } from "../../redux/slices/attendanceSlice";

interface DeleteAttendanceDialogProps {
  open: boolean;
  attendance: AttendanceRecord | null;
  onClose: () => void;
}

export default function DeleteAttendanceDialog({
  open,
  attendance,
  onClose,
}: DeleteAttendanceDialogProps) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!attendance) return;

    try {
      setLoading(true);

      await dispatch(deleteAttendance(attendance.id)).unwrap();

      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>Delete Attendance</DialogTitle>

      <DialogContent>
        <Typography>
          Are you sure you want to delete attendance for{" "}
          <strong>{attendance?.employeeName}</strong>?
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
