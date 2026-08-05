"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import { LoadingButton } from "@mui/lab";
import { ReactNode } from "react";

interface AddDialogProps {
  open: boolean;
  title: string;
  submitButtonText?: string;
  loading?: boolean;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  onClose: () => void;
  onSubmit: () => void;
  children: ReactNode;
}

export default function AddDialog({
  open,
  title,
  submitButtonText = "Save",
  loading = false,
  maxWidth = "md",
  onClose,
  onSubmit,
  children,
}: AddDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth={maxWidth}
    >
      <DialogTitle>{title}</DialogTitle>

      <DialogContent dividers>
        {children}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          Cancel
        </Button>

        <LoadingButton
          loading={loading}
          variant="contained"
          onClick={onSubmit}
        >
          {submitButtonText}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}