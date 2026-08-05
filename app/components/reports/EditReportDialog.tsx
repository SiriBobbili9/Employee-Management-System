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

import ReportForm from "./ReportForm";

import { useAppDispatch } from "../../redux/hooks";
import { updateReport } from "../../redux/thunks/reportThunk";
import { ReportRecord } from "../../redux/slices/reportSlice";

interface EditReportDialogProps {
  open: boolean;
  report: ReportRecord | null;
  onClose: () => void;
}

export default function EditReportDialog({
  open,
  report,
  onClose,
}: EditReportDialogProps) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ReportRecord | null>(null);

  useEffect(() => {
    if (report) {
      setFormData(report);
    }
  }, [report]);

  const handleChange = (
    field: keyof ReportRecord,
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

      await dispatch(updateReport(formData)).unwrap();

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
      <DialogTitle>Edit Report</DialogTitle>

      <DialogContent dividers>
        <ReportForm formData={formData} onChange={handleChange} />
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
