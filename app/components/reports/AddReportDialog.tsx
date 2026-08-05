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

import ReportForm from "./ReportForm";
import SimpleReactValidator from "simple-react-validator";

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
    if (!validator.current.allValid()) {
      validator.current.showMessages();
      return;
    }

    try {
      setLoading(true);

      await dispatch(createReport(formData)).unwrap();

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
      <DialogTitle>Create Report</DialogTitle>

      <DialogContent dividers>
        <ReportForm
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
