import { Chip, IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const payrollColumns = (
  handleEdit: (row: any) => void,
  handleDelete: (row: any) => void
): GridColDef[] => [
  {
    field: "employeeName",
    headerName: "Employee",
    flex: 1.4,
  },
  {
    field: "employeeId",
    headerName: "Employee ID",
    flex: 1,
  },
  {
    field: "department",
    headerName: "Department",
    flex: 1,
  },
  {
    field: "paymentMonth",
    headerName: "Month",
    flex: 1,
  },
  {
    field: "netSalary",
    headerName: "Net Salary",
    type: "number",
    flex: 1,
    valueFormatter: (value) => `INR ${Number(value).toLocaleString("en-IN")}`,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 0.8,
    renderCell: (params) => (
      <Chip
        label={params.value}
        color={params.value === "Paid" ? "success" : "warning"}
        size="small"
      />
    ),
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 130,
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <>
        <IconButton color="primary" onClick={() => handleEdit(params.row)}>
          <EditIcon />
        </IconButton>
        <IconButton color="error" onClick={() => handleDelete(params.row)}>
          <DeleteIcon />
        </IconButton>
      </>
    ),
  },
];
