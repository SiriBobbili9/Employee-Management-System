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

import PayrollForm, { PayrollFormData } from "./PayrollForm";

import { useAppDispatch } from "../../redux/hooks";
import { updatePayroll } from "../../redux/thunks/payrollThunk";
import { PayrollRecord } from "../../redux/slices/payrollSlice";

interface EditPayrollDialogProps {
  open: boolean;
  payroll: PayrollRecord | null;
  onClose: () => void;
}

export default function EditPayrollDialog({
  open,
  payroll,
  onClose,
}: EditPayrollDialogProps) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<PayrollFormData | null>(null);

  useEffect(() => {
    if (payroll) {
      setFormData({
        ...payroll,
        basicSalary: payroll.basicSalary,
        hra: payroll.hra,
        allowances: payroll.allowances,
        deductions: payroll.deductions,
        bonus: payroll.bonus,
        netSalary: payroll.netSalary,
      });
    }
  }, [payroll]);

  const handleChange = (
    field: keyof PayrollFormData,
    value: string | number
  ) => {
    if (!formData) return;

    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const toNumber = (value: number | "") => {
    if (value === "") {
      return 0;
    }

    return Number(value);
  };

  const handleUpdate = async () => {
    if (!formData) return;

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

      await dispatch(updatePayroll(payload)).unwrap();

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
      <DialogTitle>Edit Payroll</DialogTitle>

      <DialogContent dividers>
        <PayrollForm formData={formData} onChange={handleChange} />
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
