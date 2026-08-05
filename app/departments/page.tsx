// "use client";
// import { useEffect } from "react";
// import { fetchDepartments } from "../redux/thunks/departmentThunk";
// import MainLayout from "../components/layout/MainLayout";
// import DepartmentHeader from "../components/departments/DepartmentHeader";
// import DepartmentSearch from "../components/departments/DepartmentSearch";
// import DepartmentTable from "../components/departments/DepartmentTable";
// import { useAppDispatch, useAppSelector } from "../redux/hooks";

// export default function DepartmentsPage() {
//   const dispatch = useAppDispatch();
//   const { departments, loading, error } = useAppSelector(
//   (state) => state.department
// );

//   useEffect(() => {
//     dispatch(fetchDepartments());
//   }, [dispatch]);
//   return (
//     <MainLayout>
//       <DepartmentHeader />

//       <DepartmentSearch />

//       <DepartmentTable />
//     </MainLayout>
//   );
// }
"use client";

import { useEffect, useState } from "react";

import MainLayout from "../components/layout/MainLayout";
import DepartmentHeader from "../components/departments/DepartmentHeader";
import EditDepartmentDialog from "../components/departments/EditDepartmentDialog";
import DeleteDepartmentDialog from "../components/departments/DeleteDepartmentDialog";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchDepartments } from "../redux/thunks/departmentThunk";

import { Department } from "../redux/slices/departmentSlice";

import { departmentColumns } from "../constants/departments/departmentColumns";
import { departmentFilterFields } from "../constants/departments/departmentFilters";
import { departmentSortOptions } from "../constants/departments/departmentSortOptions";
import DataTable from "../common/Datatable";
import FilterBar from "../common/FilterBar";

export default function DepartmentsPage() {
  const dispatch = useAppDispatch();

  const { departments, loading } = useAppSelector(
    (state) => state.department
  );

  const [sortBy, setSortBy] = useState("nameAsc");

  const [filters, setFilters] = useState({
    search: "",
    manager: "",
  });

  const [selectedDepartment, setSelectedDepartment] =
    useState<Department | null>(null);

  const [departmentToDelete, setDepartmentToDelete] =
    useState<Department | null>(null);

  const [editOpen, setEditOpen] = useState(false);

  const [deleteOpen, setDeleteOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchDepartments());
  }, [dispatch]);

  const handleFilterChange = (
    field: string,
    value: string
  ) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const filteredDepartments = departments.filter((department) => {
    const search = filters.search.toLowerCase();

    const matchesSearch =
  department.departmentName.toLowerCase().includes(search) ||
  department.departmentCode.toLowerCase().includes(search) ||
  department.manager.toLowerCase().includes(search);

    const matchesManager =
      filters.manager === "" ||
      department.manager === filters.manager;

    return matchesSearch && matchesManager;
  });

  const sortedDepartments = [...filteredDepartments];

  sortedDepartments.sort((a, b) => {
    switch (sortBy) {
      case "nameAsc":
        return a.departmentName.localeCompare(b.departmentName);

      case "nameDesc":
        return b.departmentName.localeCompare(a.departmentName);

      case "manager":
        return a.manager.localeCompare(b.manager);

      case "employees":
        return a.employeesCount - b.employeesCount;

      default:
        return 0;
    }
  });

  const handleEdit = (department: Department) => {
    setSelectedDepartment(department);
    setEditOpen(true);
  };

  const handleDelete = (department: Department) => {
    setDepartmentToDelete(department);
    setDeleteOpen(true);
  };

  return (
    <MainLayout>
      <DepartmentHeader />

      <FilterBar
        filters={filters}
        sortBy={sortBy}
        fields={departmentFilterFields}
        sortOptions={departmentSortOptions}
        onChange={handleFilterChange}
        onSortChange={setSortBy}
      />

      <DataTable
        rows={sortedDepartments}
        columns={departmentColumns(
          handleEdit,
          handleDelete
        )}
        loading={loading}
      />

      <EditDepartmentDialog
        open={editOpen}
        department={selectedDepartment}
        onClose={() => {
          setEditOpen(false);
          setSelectedDepartment(null);
        }}
      />

      <DeleteDepartmentDialog
        open={deleteOpen}
        department={departmentToDelete}
        onClose={() => {
          setDeleteOpen(false);
          setDepartmentToDelete(null);
        }}
      />
    </MainLayout>
  );
}
