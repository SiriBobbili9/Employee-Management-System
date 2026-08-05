import {
  Avatar,
  Box,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { recentEmployees } from "../../constants/recentEmployees";

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

export default function RecentEmployees() {
  return (
    <Paper
      elevation={2}
      sx={{
        mt: 4,
        borderRadius: 3,
      }}
    >
      <Box p={6}>
        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
          style={{ padding: "20px" }}
        >
          Recent Employees
        </Typography>

        <TableContainer style={{ padding: "0 20px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Employee</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {recentEmployees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>
                    <Box
                      display="flex"
                      alignItems="center"
                      gap={2}
                    >
                      <Avatar>
                        {employee.name.charAt(0)}
                      </Avatar>

                      {employee.name}
                    </Box>
                  </TableCell>

                  <TableCell>
                    {employee.department}
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={employee.status}
                      color={getStatusColor(employee.status)}
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Paper>
  );
}