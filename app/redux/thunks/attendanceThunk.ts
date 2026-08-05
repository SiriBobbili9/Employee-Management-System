import { createAsyncThunk } from "@reduxjs/toolkit";
import { attendanceService } from "../../api/attendance/services/attendanceService";
import { AttendanceRecord } from "../slices/attendanceSlice";

export const fetchAttendance = createAsyncThunk(
  "attendance/fetchAttendance",
  async () => {
    return await attendanceService.getAttendance();
  }
);

export const createAttendance = createAsyncThunk(
  "attendance/createAttendance",
  async (record: AttendanceRecord) => {
    return await attendanceService.createAttendance(record);
  }
);

export const updateAttendance = createAsyncThunk(
  "attendance/updateAttendance",
  async (record: AttendanceRecord) => {
    return await attendanceService.updateAttendance(record.id, record);
  }
);

export const deleteAttendance = createAsyncThunk(
  "attendance/deleteAttendance",
  async (id: number) => {
    return await attendanceService.deleteAttendance(id);
  }
);
