import { createAsyncThunk } from "@reduxjs/toolkit";
import { reportService } from "../../api/reports/services/reportService";
import { ReportRecord } from "../slices/reportSlice";

export const fetchReports = createAsyncThunk(
  "report/fetchReports",
  async () => {
    return await reportService.getReports();
  }
);

export const createReport = createAsyncThunk(
  "report/createReport",
  async (report: ReportRecord) => {
    return await reportService.createReport(report);
  }
);

export const updateReport = createAsyncThunk(
  "report/updateReport",
  async (report: ReportRecord) => {
    return await reportService.updateReport(report.id, report);
  }
);

export const deleteReport = createAsyncThunk(
  "report/deleteReport",
  async (id: number) => {
    return await reportService.deleteReport(id);
  }
);
