"use client";

import { useEffect, useMemo, useState } from "react";

import MainLayout from "../components/layout/MainLayout";
import AttendanceHeader from "../components/attendanceRecords/AttendanceHeader";
import AttendanceSummary from "../components/attendanceRecords/AttendanceSummary";
import AddAttendanceDialog from "../components/attendanceRecords/AddAttendanceDialog";
import EditAttendanceDialog from "../components/attendanceRecords/EditAttendanceDialog";
import DeleteAttendanceDialog from "../components/attendanceRecords/DeleteAttendanceDialog";

import FilterBar from "../common/FilterBar";
import DataTable from "../common/Datatable";

import { attendanceColumns } from "../constants/attendance/attendanceColumns";
import { attendanceFilterFields } from "../constants/attendance/attendanceFilters";
import { attendanceSortOptions } from "../constants/attendance/attendanceSortOptions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchAttendance } from "../redux/thunks/attendanceThunk";
import { AttendanceRecord } from "../redux/slices/attendanceSlice";


export default function AttendancePage() {
  const dispatch = useAppDispatch();
  const { attendance, loading } = useAppSelector(
    (state) => state.attendance
  );

  const [sortBy, setSortBy] = useState("employeeAsc");

  const [filters, setFilters] = useState({
    search: "",
    department: "",
    status: "",
  });

  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [selectedAttendance, setSelectedAttendance] =
    useState<AttendanceRecord | null>(null);

  useEffect(() => {
    dispatch(fetchAttendance());
  }, [dispatch]);

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleEdit = (attendanceRecord: AttendanceRecord) => {
    setSelectedAttendance(attendanceRecord);
    setEditOpen(true);
  };

  const handleDelete = (attendanceRecord: AttendanceRecord) => {
    setSelectedAttendance(attendanceRecord);
    setDeleteOpen(true);
  };

  const filteredAttendance = useMemo(() => {
    return attendance.filter((record) => {
      const search = filters.search.toLowerCase();

      const matchesSearch =
        search === "" ||
        record.employeeName.toLowerCase().includes(search);

      const matchesDepartment =
        filters.department === "" ||
        record.department === filters.department;

      const matchesStatus =
        filters.status === "" ||
        record.status === filters.status;

      return matchesSearch && matchesDepartment && matchesStatus;
    });
  }, [attendance, filters]);

  const sortedAttendance = useMemo(() => {
    const records = [...filteredAttendance];

    records.sort((a, b) => {
      switch (sortBy) {
        case "employeeAsc":
          return a.employeeName.localeCompare(b.employeeName);

        case "employeeDesc":
          return b.employeeName.localeCompare(a.employeeName);

        case "department":
          return a.department.localeCompare(b.department);

        case "status":
          return a.status.localeCompare(b.status);

        default:
          return 0;
      }
    });

    return records;
  }, [filteredAttendance, sortBy]);

  const summary = useMemo(() => {
    const totalEmployees = sortedAttendance.length;
    const present = sortedAttendance.filter(
      (record) => record.status === "Present"
    ).length;
    const absent = sortedAttendance.filter(
      (record) => record.status === "Absent"
    ).length;
    const late = sortedAttendance.filter(
      (record) => record.status === "Late"
    ).length;

    return {
      totalEmployees,
      present,
      absent,
      late,
    };
  }, [sortedAttendance]);

  return (
    <MainLayout>
      <AttendanceHeader onAdd={() => setAddOpen(true)} />

      <AttendanceSummary
        totalEmployees={summary.totalEmployees}
        present={summary.present}
        absent={summary.absent}
        late={summary.late}
      />

      <FilterBar
        filters={filters}
        sortBy={sortBy}
        fields={attendanceFilterFields}
        sortOptions={attendanceSortOptions}
        onChange={handleFilterChange}
        onSortChange={setSortBy}
      />

      <DataTable
        rows={sortedAttendance}
        columns={attendanceColumns(
          handleEdit,
          handleDelete
        )}
        loading={loading}
      />

      <AddAttendanceDialog
        open={addOpen}
        onClose={() => setAddOpen(false)}
      />

      <EditAttendanceDialog
        open={editOpen}
        attendance={selectedAttendance}
        onClose={() => {
          setEditOpen(false);
          setSelectedAttendance(null);
        }}
      />

      <DeleteAttendanceDialog
        open={deleteOpen}
        attendance={selectedAttendance}
        onClose={() => {
          setDeleteOpen(false);
          setSelectedAttendance(null);
        }}
      />
    </MainLayout>
  );
}