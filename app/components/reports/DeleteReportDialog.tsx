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
import { deleteReport } from "../../redux/thunks/reportThunk";
import { ReportRecord } from "../../redux/slices/reportSlice";

interface DeleteReportDialogProps {
  open: boolean;
  report: ReportRecord | null;
  onClose: () => void;
}

export default function DeleteReportDialog({
  open,
  report,
  onClose,
}: DeleteReportDialogProps) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!report) return;

    try {
      setLoading(true);

      await dispatch(deleteReport(report.id)).unwrap();

      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>Delete Report</DialogTitle>

      <DialogContent>
        <Typography>
          Are you sure you want to delete <strong>{report?.reportName}</strong>?
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
