import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { employeeGrowth } from "../../constants/payroll/employeeGrowth";

export default function EmployeeGrowthChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={employeeGrowth}>
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
  );
}