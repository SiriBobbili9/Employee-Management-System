"use client";

import {
  Box,
  Chip,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { departments } from "../../constants/departments";

const getStatusColor = (
  status: string
): "success" | "error" => {
  return status === "Active" ? "success" : "error";
};

export default function DepartmentTable() {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Department Code</TableCell>
            <TableCell>Department Name</TableCell>
            <TableCell>Manager</TableCell>
            <TableCell>Employees</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {departments.map((department) => (
            <TableRow key={department.id}>
              <TableCell>{department.departmentCode}</TableCell>

              <TableCell>
                <Typography fontWeight={500}>
                  {department.departmentName}
                </Typography>
              </TableCell>

              <TableCell>{department.manager}</TableCell>

              <TableCell>{department.employees}</TableCell>

              <TableCell>
                <Chip
                  label={department.status}
                  color={getStatusColor(department.status)}
                  size="small"
                />
              </TableCell>

              <TableCell align="center">
                <IconButton color="primary">
                  <EditIcon />
                </IconButton>

                <IconButton color="error">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}