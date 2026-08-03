"use client";

import {
  Avatar,
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
  Box,
  CircularProgress,
  Alert,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppSelector } from "../../redux/hooks";
import { Employee } from "../../redux/slices/employeeSlice";
import { useState } from "react";
import EditEmployeeDialog from "./EditEmployeeDialog";
import DeleteEmployeeDialog from "./DeleteEmployeeDialog";

const getStatusColor = (status: string): "success" | "warning" | "error" => {
  switch (status) {
    case "Active":
      return "success";
    case "On Leave":
      return "warning";
    default:
      return "error";
  }
};

interface EmployeeTableProps {
  employees: Employee[];
  loading: boolean;
  error: string | null;
}

export default function EmployeeTable({
  employees,
  loading,
  error,
}: EmployeeTableProps) {
  const handleEdit = (employee: Employee) => {
    setSelectedEmployee(employee);

    setOpenEdit(true);
  };
  const handleDelete = (employee: Employee) => {
    setSelectedEmployee(employee);
    setOpenDelete(true);
  };
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null,
  );

  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }
  return (
    <div>
      <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Avatar>{employee.firstName?.charAt(0)}</Avatar>

                    <Typography>
                      {employee.firstName} {employee.lastName}
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell>{employee.department}</TableCell>

                <TableCell>
                  <Chip
                    label={employee.status}
                    color={getStatusColor(employee.status)}
                  />
                </TableCell>

                <TableCell align="center">
                  <IconButton
                    color="primary"
                    onClick={() => handleEdit(employee)}
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    color="error"
                    onClick={() => handleDelete(employee)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EditEmployeeDialog
        open={openEdit}
        employee={selectedEmployee}
        onClose={() => setOpenEdit(false)}
      />
      <DeleteEmployeeDialog
        open={openDelete}
        employee={selectedEmployee}
        onClose={() => setOpenDelete(false)}
      />
    </div>
  );
}
