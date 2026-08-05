"use client";

import { useEffect, useMemo, useState } from "react";

import LeaveHeader from "../components/leaves/LeaveHeader";
import LeaveSummary from "../components/leaves/LeaveSummary";
import AddLeaveDialog from "../components/leaves/AddLeaveDialog";
import EditLeaveDialog from "../components/leaves/EditLeaveDialog";
import DeleteLeaveDialog from "../components/leaves/DeleteLeaveDialog";
import MainLayout from "../components/layout/MainLayout";

import FilterBar from "../common/FilterBar";
import DataTable from "../common/Datatable";

import { leaveColumns } from "../constants/leaves/leaveColumns";
import { leaveFilterFields } from "../constants/leaves/leaveFilters";
import { leaveSortOptions } from "../constants/leaves/leaveSortOptions";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchLeaves } from "../redux/thunks/leaveThunk";
import { LeaveRecord } from "../redux/slices/leaveSlice";

export default function LeavesPage() {
  const dispatch = useAppDispatch();
  const { leaves, loading } = useAppSelector((state) => state.leave);

  const [sortBy, setSortBy] = useState("employeeAsc");

  const [filters, setFilters] = useState({
    search: "",
    department: "",
    status: "",
  });

  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [selectedLeave, setSelectedLeave] =
    useState<LeaveRecord | null>(null);

  useEffect(() => {
    dispatch(fetchLeaves());
  }, [dispatch]);

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleEdit = (leave: LeaveRecord) => {
    setSelectedLeave(leave);
    setEditOpen(true);
  };

  const handleDelete = (leave: LeaveRecord) => {
    setSelectedLeave(leave);
    setDeleteOpen(true);
  };

  const filteredLeaves = useMemo(() => {
    return leaves.filter((leave) => {
      const search = filters.search.toLowerCase();

      const matchesSearch =
        search === "" ||
        leave.employeeName.toLowerCase().includes(search);

      const matchesDepartment =
        filters.department === "" ||
        leave.department === filters.department;

      const matchesStatus =
        filters.status === "" ||
        leave.status === filters.status;

      return matchesSearch && matchesDepartment && matchesStatus;
    });
  }, [leaves, filters]);

  const sortedLeaves = useMemo(() => {
    const records = [...filteredLeaves];

    records.sort((a, b) => {
      switch (sortBy) {
        case "employeeAsc":
          return a.employeeName.localeCompare(b.employeeName);

        case "employeeDesc":
          return b.employeeName.localeCompare(a.employeeName);

        case "fromDate":
          return a.fromDate.localeCompare(b.fromDate);

        case "status":
          return a.status.localeCompare(b.status);

        default:
          return 0;
      }
    });

    return records;
  }, [filteredLeaves, sortBy]);

  const summary = useMemo(() => {
    const pending = sortedLeaves.filter(
      (leave) => leave.status === "Pending"
    ).length;

    const approved = sortedLeaves.filter(
      (leave) => leave.status === "Approved"
    ).length;

    const rejected = sortedLeaves.filter(
      (leave) => leave.status === "Rejected"
    ).length;

    return {
      pending,
      approved,
      rejected,
    };
  }, [sortedLeaves]);

  return (
    <MainLayout>
      <LeaveHeader onAdd={() => setAddOpen(true)} />

      <LeaveSummary
        pending={summary.pending}
        approved={summary.approved}
        rejected={summary.rejected}
      />

      <FilterBar
        filters={filters}
        sortBy={sortBy}
        fields={leaveFilterFields}
        sortOptions={leaveSortOptions}
        onChange={handleFilterChange}
        onSortChange={setSortBy}
      />

      <DataTable
        rows={sortedLeaves}
        columns={leaveColumns(handleEdit, handleDelete)}
        loading={loading}
      />

      <AddLeaveDialog
        open={addOpen}
        onClose={() => setAddOpen(false)}
      />

      <EditLeaveDialog
        open={editOpen}
        leave={selectedLeave}
        onClose={() => {
          setEditOpen(false);
          setSelectedLeave(null);
        }}
      />

      <DeleteLeaveDialog
        open={deleteOpen}
        leave={selectedLeave}
        onClose={() => {
          setDeleteOpen(false);
          setSelectedLeave(null);
        }}
      />
    </MainLayout>
  );
}