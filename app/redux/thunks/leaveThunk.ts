import { createAsyncThunk } from "@reduxjs/toolkit";
import { leaveService } from "../../api/leaves/services/leaveService";
import { LeaveRecord } from "../slices/leaveSlice";

export const fetchLeaves = createAsyncThunk("leave/fetchLeaves", async () => {
  return await leaveService.getLeaves();
});

export const createLeave = createAsyncThunk(
  "leave/createLeave",
  async (leave: LeaveRecord) => {
    return await leaveService.createLeave(leave);
  }
);

export const updateLeave = createAsyncThunk(
  "leave/updateLeave",
  async (leave: LeaveRecord) => {
    return await leaveService.updateLeave(leave.id, leave);
  }
);

export const deleteLeave = createAsyncThunk("leave/deleteLeave", async (id: number) => {
  return await leaveService.deleteLeave(id);
});
