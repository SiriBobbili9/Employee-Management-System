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

import { monthlyEmployeeGrowth } from "../../constants/reportsChart";

export default function ReportCharts() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3, mb: 3 }}>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Employee Growth
      </Typography>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={monthlyEmployeeGrowth}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="employees"
            stroke="#1976d2"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}