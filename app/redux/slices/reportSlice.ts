import { createSlice } from "@reduxjs/toolkit";
import {
	createReport,
	deleteReport,
	fetchReports,
	updateReport,
} from "../thunks/reportThunk";

export interface ReportRecord {
	id: number;
	reportName: string;
	generatedBy: string;
	generatedOn: string;
	reportType: "Employee" | "Attendance" | "Leave" | "Payroll";
	status: "Completed" | "Processing";
}

interface ReportState {
	reports: ReportRecord[];
	loading: boolean;
	error: string | null;
}

const initialState: ReportState = {
	reports: [],
	loading: false,
	error: null,
};

const reportSlice = createSlice({
	name: "report",
	initialState,
	reducers: {},

	extraReducers: (builder) => {
		builder
			.addCase(fetchReports.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchReports.fulfilled, (state, action) => {
				state.loading = false;
				state.reports = action.payload;
			})
			.addCase(fetchReports.rejected, (state) => {
				state.loading = false;
				state.error = "Failed to fetch reports";
			})

			.addCase(createReport.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(createReport.fulfilled, (state, action) => {
				state.loading = false;
				state.reports.push(action.payload);
			})
			.addCase(createReport.rejected, (state) => {
				state.loading = false;
				state.error = "Failed to create report";
			})

			.addCase(updateReport.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(updateReport.fulfilled, (state, action) => {
				state.loading = false;
				state.reports = state.reports.map((report) =>
					report.id === action.payload.id ? action.payload : report
				);
			})
			.addCase(updateReport.rejected, (state) => {
				state.loading = false;
				state.error = "Failed to update report";
			})

			.addCase(deleteReport.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(deleteReport.fulfilled, (state, action) => {
				state.loading = false;
				state.reports = state.reports.filter(
					(report) => report.id !== action.payload.id
				);
			})
			.addCase(deleteReport.rejected, (state) => {
				state.loading = false;
				state.error = "Failed to delete report";
			});
	},
});

export default reportSlice.reducer;
