import { GridColDef } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const departmentColumns = (
  handleEdit: (row: any) => void,
  handleDelete: (row: any) => void
): GridColDef[] => [
  {
    field: "departmentName",
    headerName: "Department",
    flex: 1.5,
  },

  {
    field: "manager",
    headerName: "Manager",
    flex: 1.5,
  },

  {
    field: "employeesCount",
    headerName: "Employees",
    type: "number",
    flex: 1,
  },

  {
    field: "location",
    headerName: "Location",
    flex: 1.5,
    valueGetter: (_value, row) =>
      row.location ?? row.Location ?? row.officeLocation ?? "-",
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