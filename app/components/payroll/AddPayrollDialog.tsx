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

import PayrollForm, { PayrollFormData } from "./PayrollForm";

import { useAppDispatch } from "../../redux/hooks";
import { createPayroll } from "../../redux/thunks/payrollThunk";
import { PayrollRecord } from "../../redux/slices/payrollSlice";

interface AddPayrollDialogProps {
  open: boolean;
  onClose: () => void;
}

const initialFormData: PayrollFormData = {
  id: 0,
  employeeId: "",
  employeeName: "",
  department: "",
  basicSalary: "",
  hra: "",
  allowances: "",
  deductions: "",
  bonus: "",
  netSalary: "",
  paymentMonth: "",
  status: "Pending",
};

export default function AddPayrollDialog({
  open,
  onClose,
}: AddPayrollDialogProps) {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<PayrollFormData>(initialFormData);

  const handleChange = (
    field: keyof PayrollFormData,
    value: string | number
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toNumber = (value: number | "") => {
    if (value === "") {
      return 0;
    }

    return Number(value);
  };

  const handleSubmit = async () => {
    if (!formData.employeeName.trim() || !formData.employeeId.trim()) {
      return;
    }

    try {
      setLoading(true);

      const payload: PayrollRecord = {
        ...formData,
        basicSalary: toNumber(formData.basicSalary),
        hra: toNumber(formData.hra),
        allowances: toNumber(formData.allowances),
        deductions: toNumber(formData.deductions),
        bonus: toNumber(formData.bonus),
        netSalary: toNumber(formData.netSalary),
      };

      await dispatch(createPayroll(payload)).unwrap();

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
      <DialogTitle>Generate Payroll</DialogTitle>

      <DialogContent dividers>
        <PayrollForm formData={formData} onChange={handleChange} />
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
