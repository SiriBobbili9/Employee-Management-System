import { Chip, IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const leaveColumns = (
  handleEdit: (row: any) => void,
  handleDelete: (row: any) => void
): GridColDef[] => [
  {
    field: "employeeName",
    headerName: "Employee",
    flex: 1.4,
  },
  {
    field: "department",
    headerName: "Department",
    flex: 1,
  },
  {
    field: "leaveType",
    headerName: "Leave Type",
    flex: 1,
  },
  {
    field: "fromDate",
    headerName: "From",
    flex: 1,
  },
  {
    field: "toDate",
    headerName: "To",
    flex: 1,
  },
  {
    field: "days",
    headerName: "Days",
    type: "number",
    flex: 0.7,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderCell: (params) => (
      <Chip
        label={params.value}
        color={
          params.value === "Approved"
            ? "success"
            : params.value === "Pending"
            ? "warning"
            : "error"
        }
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
