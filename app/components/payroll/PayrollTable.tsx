"use client";

import {
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import {payrolls}  from "../../constants/payroll";

const getStatusColor = (
  status: string
): "success" | "warning" => {
  return status === "Paid" ? "success" : "warning";
};

export default function PayrollTable() {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Employee</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Month</TableCell>
            <TableCell>Net Salary</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {payrolls.map((payroll) => (
            <TableRow key={payroll.id}>
              <TableCell>{payroll.employeeName}</TableCell>
              <TableCell>{payroll.department}</TableCell>
              <TableCell>{payroll.paymentMonth}</TableCell>
              <TableCell>
                ₹{payroll.netSalary.toLocaleString("en-IN")}
              </TableCell>
              <TableCell>
                <Chip
                  label={payroll.status}
                  color={getStatusColor(payroll.status)}
                  size="small"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}