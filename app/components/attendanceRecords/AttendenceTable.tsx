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

import { attendanceRecords } from "../../constants/attendanceRecords";

const getStatusColor = (
  status: string
): "success" | "error" | "warning" | "info" => {
  switch (status) {
    case "Present":
      return "success";
    case "Absent":
      return "error";
    case "Late":
      return "warning";
    default:
      return "info";
  }
};

export default function AttendanceTable() {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Employee</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Check In</TableCell>
            <TableCell>Check Out</TableCell>
            <TableCell>Working Hours</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {attendanceRecords.map((record) => (
            <TableRow key={record.id}>
              <TableCell>{record.employeeName}</TableCell>
              <TableCell>{record.department}</TableCell>
              <TableCell>{record.checkIn}</TableCell>
              <TableCell>{record.checkOut}</TableCell>
              <TableCell>{record.workingHours}</TableCell>
              <TableCell>
                <Chip
                  label={record.status}
                  color={getStatusColor(record.status)}
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