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

import ReportForm from "./ReportForm";

import { useAppDispatch } from "../../redux/hooks";
import { createReport } from "../../redux/thunks/reportThunk";
import { ReportRecord } from "../../redux/slices/reportSlice";

interface AddReportDialogProps {
  open: boolean;
  onClose: () => void;
}

const initialFormData: ReportRecord = {
  id: 0,
  reportName: "",
  generatedBy: "",
  generatedOn: "",
  reportType: "Employee",
  status: "Processing",
};

export default function AddReportDialog({
  open,
  onClose,
}: AddReportDialogProps) {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ReportRecord>(initialFormData);

  const handleChange = (
    field: keyof ReportRecord,
    value: string | number
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.reportName.trim() || !formData.generatedBy.trim()) {
      return;
    }

    try {
      setLoading(true);

      await dispatch(createReport(formData)).unwrap();

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
      <DialogTitle>Create Report</DialogTitle>

      <DialogContent dividers>
        <ReportForm formData={formData} onChange={handleChange} />
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
