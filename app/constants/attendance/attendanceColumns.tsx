import { Chip, IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const attendanceColumns = (
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
    flex: 1.2,
  },
  {
    field: "checkIn",
    headerName: "Check In",
    flex: 1,
  },
  {
    field: "checkOut",
    headerName: "Check Out",
    flex: 1,
  },
  {
    field: "workingHours",
    headerName: "Working Hours",
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
          params.value === "Present"
            ? "success"
            : params.value === "Late"
            ? "warning"
            : params.value === "Absent"
            ? "error"
            : "info"
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
