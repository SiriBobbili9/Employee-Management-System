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

import { leaves } from "../../constants/leaves";

const getStatusColor = (
  status: string
): "warning" | "success" | "error" => {
  switch (status) {
    case "Pending":
      return "warning";
    case "Approved":
      return "success";
    default:
      return "error";
  }
};

export default function LeaveTable() {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Employee</TableCell>
            <TableCell>Leave Type</TableCell>
            <TableCell>From</TableCell>
            <TableCell>To</TableCell>
            <TableCell>Days</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {leaves.map((leave) => (
            <TableRow key={leave.id}>
              <TableCell>{leave.employeeName}</TableCell>
              <TableCell>{leave.leaveType}</TableCell>
              <TableCell>{leave.fromDate}</TableCell>
              <TableCell>{leave.toDate}</TableCell>
              <TableCell>{leave.days}</TableCell>
              <TableCell>
                <Chip
                  label={leave.status}
                  color={getStatusColor(leave.status)}
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