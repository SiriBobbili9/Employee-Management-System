import { createSlice } from "@reduxjs/toolkit";
import {
	createPayroll,
	deletePayroll,
	fetchPayrolls,
	updatePayroll,
} from "../thunks/payrollThunk";

export interface PayrollRecord {
	id: number;
	employeeId: string;
	employeeName: string;
	department: string;
	basicSalary: number;
	hra: number;
	allowances: number;
	deductions: number;
	bonus: number;
	netSalary: number;
	paymentMonth: string;
	status: "Paid" | "Pending";
}

interface PayrollState {
	payrolls: PayrollRecord[];
	loading: boolean;
	error: string | null;
}

const initialState: PayrollState = {
	payrolls: [],
	loading: false,
	error: null,
};

const payrollSlice = createSlice({
	name: "payroll",
	initialState,
	reducers: {},

	extraReducers: (builder) => {
		builder
			.addCase(fetchPayrolls.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchPayrolls.fulfilled, (state, action) => {
				state.loading = false;
				state.payrolls = action.payload;
			})
			.addCase(fetchPayrolls.rejected, (state) => {
				state.loading = false;
				state.error = "Failed to fetch payroll records";
			})

			.addCase(createPayroll.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(createPayroll.fulfilled, (state, action) => {
				state.loading = false;
				state.payrolls.push(action.payload);
			})
			.addCase(createPayroll.rejected, (state) => {
				state.loading = false;
				state.error = "Failed to create payroll record";
			})

			.addCase(updatePayroll.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(updatePayroll.fulfilled, (state, action) => {
				state.loading = false;
				state.payrolls = state.payrolls.map((payroll) =>
					payroll.id === action.payload.id ? action.payload : payroll
				);
			})
			.addCase(updatePayroll.rejected, (state) => {
				state.loading = false;
				state.error = "Failed to update payroll record";
			})

			.addCase(deletePayroll.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(deletePayroll.fulfilled, (state, action) => {
				state.loading = false;
				state.payrolls = state.payrolls.filter(
					(payroll) => payroll.id !== action.payload.id
				);
			})
			.addCase(deletePayroll.rejected, (state) => {
				state.loading = false;
				state.error = "Failed to delete payroll record";
			});
	},
});

export default payrollSlice.reducer;
