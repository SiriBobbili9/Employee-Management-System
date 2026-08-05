import { GridColDef } from "@mui/x-data-grid";
import { Chip, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const employeeColumns = (
  handleEdit: (row: any) => void,
  handleDelete: (row: any) => void
): GridColDef[] => [
  {
    field: "employeeId",
    headerName: "Employee ID",
    flex: 1,
  },

  {
    field: "name",
    headerName: "Employee Name",
    flex: 1.5,
    valueGetter: (_, row) =>
      `${row.firstName} ${row.lastName}`,
  },

  {
    field: "department",
    headerName: "Department",
    flex: 1,
  },

  {
    field: "designation",
    headerName: "Designation",
    flex: 1,
  },

  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderCell: (params) => (
      <Chip
        label={params.value}
        color={
          params.value === "Active"
            ? "success"
            : params.value === "On Leave"
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
    width: 140,
    sortable: false,
    filterable: false,

    renderCell: (params) => (
      <>
        <IconButton
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          <EditIcon />
        </IconButton>

        <IconButton
          color="error"
          onClick={() => handleDelete(params.row)}
        >
          <DeleteIcon />
        </IconButton>
      </>
    ),
  },
];

