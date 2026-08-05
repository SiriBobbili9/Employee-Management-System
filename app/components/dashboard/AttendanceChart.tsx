"use client";


import { Paper, Typography } from "@mui/material";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {attendanceData}  from "../../constants/attendance";

export default function AttendanceChart() {
  return (
    <Paper
      elevation={2}
      sx={{
        mt: 4,
        p: 3,
        borderRadius: 3,
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        style={{ marginBottom: "50px" }}
      >
        Attendance Overview
      </Typography>

      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <LineChart data={attendanceData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="attendance"
            stroke="#1976d2"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}