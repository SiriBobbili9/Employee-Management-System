import { createAsyncThunk } from "@reduxjs/toolkit";
import { payrollService } from "../../api/payroll/services/payrollService";
import { PayrollRecord } from "../slices/payrollSlice";

export const fetchPayrolls = createAsyncThunk(
  "payroll/fetchPayrolls",
  async () => {
    return await payrollService.getPayrolls();
  }
);

export const createPayroll = createAsyncThunk(
  "payroll/createPayroll",
  async (payroll: PayrollRecord) => {
    return await payrollService.createPayroll(payroll);
  }
);

export const updatePayroll = createAsyncThunk(
  "payroll/updatePayroll",
  async (payroll: PayrollRecord) => {
    return await payrollService.updatePayroll(payroll.id, payroll);
  }
);

export const deletePayroll = createAsyncThunk(
  "payroll/deletePayroll",
  async (id: number) => {
    return await payrollService.deletePayroll(id);
  }
);
