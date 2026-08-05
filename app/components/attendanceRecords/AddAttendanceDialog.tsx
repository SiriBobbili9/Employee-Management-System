"use client";

import { useRef, useState } from "react";

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
import SimpleReactValidator from "simple-react-validator";

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
  const validator = useRef(
    new SimpleReactValidator({
      autoForceUpdate: {
        forceUpdate: () => {
          setRefresh((prev) => !prev);
        },
      },
    })
  );

  const [, setRefresh] = useState(false);
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
    if (!validator.current.allValid()) {
      validator.current.showMessages();
      return;
    }

    try {
      setLoading(true);

      await dispatch(createAttendance(formData)).unwrap();

      validator.current.hideMessages();

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
        <AttendanceForm
          formData={formData}
          onChange={handleChange}
          validator={validator}
        />
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
