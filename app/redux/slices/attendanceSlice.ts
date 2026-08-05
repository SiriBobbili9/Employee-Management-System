import { createSlice } from "@reduxjs/toolkit";
import {
	createAttendance,
	deleteAttendance,
	fetchAttendance,
	updateAttendance,
} from "../thunks/attendanceThunk";

export interface AttendanceRecord {
	id: number;
	employeeName: string;
	department: string;
	checkIn: string;
	checkOut: string;
	workingHours: string;
	status: "Present" | "Absent" | "Late" | "Half Day";
}

interface AttendanceState {
	attendance: AttendanceRecord[];
	loading: boolean;
	error: string | null;
}

const initialState: AttendanceState = {
	attendance: [],
	loading: false,
	error: null,
};

const attendanceSlice = createSlice({
	name: "attendance",
	initialState,
	reducers: {},

	extraReducers: (builder) => {
		builder
			.addCase(fetchAttendance.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchAttendance.fulfilled, (state, action) => {
				state.loading = false;
				state.attendance = action.payload;
			})
			.addCase(fetchAttendance.rejected, (state) => {
				state.loading = false;
				state.error = "Failed to fetch attendance";
			})

			.addCase(createAttendance.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(createAttendance.fulfilled, (state, action) => {
				state.loading = false;
				state.attendance.push(action.payload);
			})
			.addCase(createAttendance.rejected, (state) => {
				state.loading = false;
				state.error = "Failed to create attendance record";
			})

			.addCase(updateAttendance.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(updateAttendance.fulfilled, (state, action) => {
				state.loading = false;
				state.attendance = state.attendance.map((record) =>
					record.id === action.payload.id ? action.payload : record
				);
			})
			.addCase(updateAttendance.rejected, (state) => {
				state.loading = false;
				state.error = "Failed to update attendance record";
			})

			.addCase(deleteAttendance.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(deleteAttendance.fulfilled, (state, action) => {
				state.loading = false;
				state.attendance = state.attendance.filter(
					(record) => record.id !== action.payload.id
				);
			})
			.addCase(deleteAttendance.rejected, (state) => {
				state.loading = false;
				state.error = "Failed to delete attendance record";
			});
	},
});

export default attendanceSlice.reducer;
