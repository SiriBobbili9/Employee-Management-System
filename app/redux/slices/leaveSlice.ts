import { createSlice } from "@reduxjs/toolkit";
import {
	createLeave,
	deleteLeave,
	fetchLeaves,
	updateLeave,
} from "../thunks/leaveThunk";

export interface LeaveRecord {
	id: number;
	employeeName: string;
	department: string;
	leaveType: "Casual" | "Sick" | "Earned";
	fromDate: string;
	toDate: string;
	days: number;
	reason: string;
	status: "Pending" | "Approved" | "Rejected";
}

interface LeaveState {
	leaves: LeaveRecord[];
	loading: boolean;
	error: string | null;
}

const initialState: LeaveState = {
	leaves: [],
	loading: false,
	error: null,
};

const leaveSlice = createSlice({
	name: "leave",
	initialState,
	reducers: {},

	extraReducers: (builder) => {
		builder
			.addCase(fetchLeaves.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchLeaves.fulfilled, (state, action) => {
				state.loading = false;
				state.leaves = action.payload;
			})
			.addCase(fetchLeaves.rejected, (state) => {
				state.loading = false;
				state.error = "Failed to fetch leaves";
			})

			.addCase(createLeave.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(createLeave.fulfilled, (state, action) => {
				state.loading = false;
				state.leaves.push(action.payload);
			})
			.addCase(createLeave.rejected, (state) => {
				state.loading = false;
				state.error = "Failed to create leave";
			})

			.addCase(updateLeave.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(updateLeave.fulfilled, (state, action) => {
				state.loading = false;
				state.leaves = state.leaves.map((leave) =>
					leave.id === action.payload.id ? action.payload : leave
				);
			})
			.addCase(updateLeave.rejected, (state) => {
				state.loading = false;
				state.error = "Failed to update leave";
			})

			.addCase(deleteLeave.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(deleteLeave.fulfilled, (state, action) => {
				state.loading = false;
				state.leaves = state.leaves.filter(
					(leave) => leave.id !== action.payload.id
				);
			})
			.addCase(deleteLeave.rejected, (state) => {
				state.loading = false;
				state.error = "Failed to delete leave";
			});
	},
});

export default leaveSlice.reducer;
