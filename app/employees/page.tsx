// "use client";
// import StatusChip from "../common/StatusChip";
// import MainLayout from "../components/layout/MainLayout";
// import EmployeeHeader from "../components/employees/EmployeeHeader";
// import EmployeeSearch from "../components/employees/EmployeeSearch";
// import EmployeeTable from "../components/employees/EmployeeTable";
// import { useAppDispatch, useAppSelector } from "../redux/hooks";
// import { useEffect, useState } from "react";
// import { fetchEmployees } from "../redux/thunks/employeeThunk";
// import EmployeeFilters from "../components/employees/EmployeeFilter";
// import { Box, Pagination, Stack, Typography } from "@mui/material";
// import DataTable, { Column } from "../common/Datatable";
// import { Employee } from "../constants/recentEmployees";
// import { employeeColumns } from "../constants/employeeColumns";

// const columns: Column<Employee>[] = [
//   {
//     field: "employeeId",
//     headerName: "Employee ID",
//   },
//   {
//     field: "name",
//     headerName: "Name",
//     render: (row) => (
//       <>
//         {row.firstName} {row.lastName}
//       </>
//     ),
//   },
//   {
//     field: "department",
//     headerName: "Department",
//   },
//   {
//     field: "designation",
//     headerName: "Designation",
//   },
//   {
//     field: "status",
//     headerName: "Status",
//     render: (row) => <StatusChip status={row.status} />,
//   },
// ];

// export default function EmployeesPage() {
//   const [page, setPage] = useState(1);

//   const rowsPerPage = 10;
//   const dispatch = useAppDispatch();

//   const { employees, loading, error } = useAppSelector(
//     (state) => state.employee,
//   );
//   const [sortBy, setSortBy] = useState("nameAsc");
//   const [filters, setFilters] = useState({
//     search: "",
//     department: "",
//     status: "",
//   });

//   const filteredEmployees = employees.filter((employee) => {
//     const search = filters.search.toLowerCase();

//     const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase();

//     const matchesSearch =
//       fullName.includes(search) ||
//       employee.employeeId.toLowerCase().includes(search) ||
//       employee.email.toLowerCase().includes(search);

//     const matchesDepartment =
//       filters.department === "" || employee.department === filters.department;

//     const matchesStatus =
//       filters.status === "" || employee.status === filters.status;

//     return matchesSearch && matchesDepartment && matchesStatus;
//   });
//   const sortedEmployees = [...filteredEmployees];
//   sortedEmployees.sort((a, b) => {
//     switch (sortBy) {
//       case "nameAsc":
//         return `${a.firstName} ${a.lastName}`.localeCompare(
//           `${b.firstName} ${b.lastName}`,
//         );

//       case "nameDesc":
//         return `${b.firstName} ${b.lastName}`.localeCompare(
//           `${a.firstName} ${a.lastName}`,
//         );

//       case "department":
//         return a.department.localeCompare(b.department);

//       case "employeeId":
//         return a.employeeId.localeCompare(b.employeeId);

//       default:
//         return 0;
//     }
//   });
//   const startIndex = (page - 1) * rowsPerPage;

//   const paginatedEmployees = sortedEmployees.slice(
//     startIndex,
//     startIndex + rowsPerPage,
//   );

//   const handleFilterChange = (field: string, value: string) => {
//     setFilters((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   useEffect(() => {
//     dispatch(fetchEmployees());
//   }, [dispatch]);
//   return (
//     <MainLayout>
//       <EmployeeHeader />

//       {/* <EmployeeSearch /> */}
//       <EmployeeFilters
//         filters={filters}
//         sortBy={sortBy}
//         onChange={handleFilterChange}
//         onSortChange={setSortBy}
//       />

//       {/* <EmployeeTable
//         employees={paginatedEmployees}
//         loading={loading}
//         error={error}
//       /> */}
//       {/* <DataTable
//     rows={employees}
//     columns={columns}
//     loading={loading}
//     error={error}
//     getRowId={(row) => row.id}
// /> */}
// <DataTable
//     rows={sortedEmployees}
//     columns={employeeColumns(
//         handleEdit,
//         handleDelete
//     )}
//     loading={loading}
// />
//       <Box
//         mt={3}
//         display="flex"
//         // justifyContent="space-between"
//         alignItems="center"
//       >
//         <Typography variant="body2" color="text.secondary">
//           Showing {paginatedEmployees.length} of {sortedEmployees.length}{" "}
//           employees
//         </Typography>

//         {/* <Pagination
//           page={page}
//           count={Math.ceil(sortedEmployees.length / rowsPerPage)}
//           color="primary"
//           onChange={(event, value) => setPage(value)}
//         /> */}
//       </Box>
//     </MainLayout>
//   );
// }
"use client";

import { useEffect, useState } from "react";

import MainLayout from "../components/layout/MainLayout";
import EmployeeHeader from "../components/employees/EmployeeHeader";
import EmployeeFilters from "../components/employees/EmployeeFilter";
import EditEmployeeDialog from "../components/employees/EditEmployeeDialog";
import DeleteEmployeeDialog from "../components/employees/DeleteEmployeeDialog";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchEmployees } from "../redux/thunks/employeeThunk";

import { Employee } from "../redux/slices/employeeSlice";

import { employeeColumns } from "../constants/employeeColumns";
import DataTable from "../common/Datatable";
import FilterBar from "../common/FilterBar";
import { filterFields, sortOptions } from "../constants/filterFields";

export default function EmployeesPage() {
  const dispatch = useAppDispatch();

  const { employees, loading } = useAppSelector((state) => state.employee);

  const [sortBy, setSortBy] = useState("nameAsc");

  const [filters, setFilters] = useState({
    search: "",
    department: "",
    status: "",
  });

  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null,
  );

  const [employeeToDelete, setEmployeeToDelete] = useState<Employee | null>(
    null,
  );

  const [editOpen, setEditOpen] = useState(false);

  const [deleteOpen, setDeleteOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const filteredEmployees = employees.filter((employee) => {
    const search = filters.search.toLowerCase();

    const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase();

    const matchesSearch =
      fullName.includes(search) ||
      employee.employeeId.toLowerCase().includes(search) ||
      employee.email.toLowerCase().includes(search);

    const matchesDepartment =
      !filters.department || employee.department === filters.department;

    const matchesStatus = !filters.status || employee.status === filters.status;

    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const sortedEmployees = [...filteredEmployees];

  sortedEmployees.sort((a, b) => {
    switch (sortBy) {
      case "nameAsc":
        return `${a.firstName} ${a.lastName}`.localeCompare(
          `${b.firstName} ${b.lastName}`,
        );

      case "nameDesc":
        return `${b.firstName} ${b.lastName}`.localeCompare(
          `${a.firstName} ${a.lastName}`,
        );

      case "department":
        return a.department.localeCompare(b.department);

      case "employeeId":
        return a.employeeId.localeCompare(b.employeeId);

      default:
        return 0;
    }
  });

  const handleEdit = (employee: Employee) => {
    setSelectedEmployee(employee);
    setEditOpen(true);
  };

  const handleDelete = (employee: Employee) => {
    setEmployeeToDelete(employee);
    setDeleteOpen(true);
  };

  return (
    <MainLayout>
      <EmployeeHeader />

      <FilterBar
        filters={filters}
        sortBy={sortBy}
        fields={filterFields}
        sortOptions={sortOptions}
        onChange={handleFilterChange}
        onSortChange={setSortBy}
      />

      <DataTable
        rows={sortedEmployees}
        columns={employeeColumns(handleEdit, handleDelete)}
        loading={loading}
      />

      <EditEmployeeDialog
        open={editOpen}
        employee={selectedEmployee}
        onClose={() => {
          setEditOpen(false);
          setSelectedEmployee(null);
        }}
      />

      <DeleteEmployeeDialog
        open={deleteOpen}
        employee={employeeToDelete}
        onClose={() => {
          setDeleteOpen(false);
          setEmployeeToDelete(null);
        }}
      />
    </MainLayout>
  );
}
