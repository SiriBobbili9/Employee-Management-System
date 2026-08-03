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
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppSelector } from "../../redux/hooks";

const getStatusColor = (
  status: string
): "success" | "warning" | "error" => {
  switch (status) {
    case "Active":
      return "success";
    case "On Leave":
      return "warning";
    default:
      return "error";
  }
};

export default function EmployeeTable() {
  const recentEmployees = useAppSelector(
  (state) => state.employee.employees
);
  return (
    <TableContainer
      component={Paper}
      sx={{ borderRadius: 3 }}
    >
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
          {recentEmployees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar>
                    {employee.firstName?.charAt(0)}
                  </Avatar>

                  <Typography>
                    {employee.firstName} {employee.lastName}
                  </Typography>
                </Box>
              </TableCell>

              <TableCell>
                {employee.department}
              </TableCell>

              <TableCell>
                <Chip
                  label={employee.status}
                  color={getStatusColor(employee.status)}
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