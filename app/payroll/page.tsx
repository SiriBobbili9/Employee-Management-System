"use client";

import { useEffect, useMemo, useState } from "react";

import MainLayout from "../components/layout/MainLayout";
import PayrollHeader from "../components/payroll/PayrollHeader";
import PayrollSummary from "../components/payroll/PayrollSummary";
import AddPayrollDialog from "../components/payroll/AddPayrollDialog";
import EditPayrollDialog from "../components/payroll/EditPayrollDialog";
import DeletePayrollDialog from "../components/payroll/DeletePayrollDialog";

import FilterBar from "../common/FilterBar";
import DataTable from "../common/Datatable";

import { payrollColumns } from "../constants/payroll/payrollColumns";
import { payrollFilterFields } from "../constants/payroll/payrollFilters";
import { payrollSortOptions } from "../constants/payroll/payrollSortOptions";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchPayrolls } from "../redux/thunks/payrollThunk";
import { PayrollRecord } from "../redux/slices/payrollSlice";
import EmployeeGrowthChart from "../components/payroll/EmployeeGrowthChart";

export default function PayrollPage() {
  const dispatch = useAppDispatch();
  const { payrolls, loading } = useAppSelector((state) => state.payroll);

  const [sortBy, setSortBy] = useState("employeeAsc");

  const [filters, setFilters] = useState({
    search: "",
    department: "",
    status: "",
  });

  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [selectedPayroll, setSelectedPayroll] =
    useState<PayrollRecord | null>(null);

  useEffect(() => {
    dispatch(fetchPayrolls());
  }, [dispatch]);

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleEdit = (payroll: PayrollRecord) => {
    setSelectedPayroll(payroll);
    setEditOpen(true);
  };

  const handleDelete = (payroll: PayrollRecord) => {
    setSelectedPayroll(payroll);
    setDeleteOpen(true);
  };

  const filteredPayrolls = useMemo(() => {
    return payrolls.filter((payroll) => {
      const search = filters.search.toLowerCase();

      const matchesSearch =
        search === "" ||
        payroll.employeeName.toLowerCase().includes(search) ||
        payroll.employeeId.toLowerCase().includes(search);

      const matchesDepartment =
        filters.department === "" ||
        payroll.department === filters.department;

      const matchesStatus =
        filters.status === "" ||
        payroll.status === filters.status;

      return matchesSearch && matchesDepartment && matchesStatus;
    });
  }, [payrolls, filters]);

  const sortedPayrolls = useMemo(() => {
    const records = [...filteredPayrolls];

    records.sort((a, b) => {
      switch (sortBy) {
        case "employeeAsc":
          return a.employeeName.localeCompare(b.employeeName);

        case "employeeDesc":
          return b.employeeName.localeCompare(a.employeeName);

        case "netSalary":
          return b.netSalary - a.netSalary;

        case "status":
          return a.status.localeCompare(b.status);

        default:
          return 0;
      }
    });

    return records;
  }, [filteredPayrolls, sortBy]);

  const summary = useMemo(() => {
    const totalPayroll = sortedPayrolls.reduce(
      (sum, payroll) => sum + payroll.netSalary,
      0
    );

    const paidCount = sortedPayrolls.filter(
      (payroll) => payroll.status === "Paid"
    ).length;

    const pendingCount = sortedPayrolls.filter(
      (payroll) => payroll.status === "Pending"
    ).length;

    return {
      totalPayroll,
      paidCount,
      pendingCount,
    };
  }, [sortedPayrolls]);

  return (
    <MainLayout>
      <PayrollHeader onAdd={() => setAddOpen(true)} />

      <PayrollSummary
        totalPayroll={summary.totalPayroll}
        paidCount={summary.paidCount}
        pendingCount={summary.pendingCount}
      />
<EmployeeGrowthChart />

      <FilterBar
        filters={filters}
        sortBy={sortBy}
        fields={payrollFilterFields}
        sortOptions={payrollSortOptions}
        onChange={handleFilterChange}
        onSortChange={setSortBy}
      />
      
      <DataTable
        rows={sortedPayrolls}
        columns={payrollColumns(handleEdit, handleDelete)}
        loading={loading}
      />

      <AddPayrollDialog
        open={addOpen}
        onClose={() => setAddOpen(false)}
      />

      <EditPayrollDialog
        open={editOpen}
        payroll={selectedPayroll}
        onClose={() => {
          setEditOpen(false);
          setSelectedPayroll(null);
        }}
      />

      <DeletePayrollDialog
        open={deleteOpen}
        payroll={selectedPayroll}
        onClose={() => {
          setDeleteOpen(false);
          setSelectedPayroll(null);
        }}
      />
    </MainLayout>
  );
}