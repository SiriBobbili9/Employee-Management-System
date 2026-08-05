"use client";

import { useEffect, useMemo, useState } from "react";

import MainLayout from "../components/layout/MainLayout";
import ReportHeader from "../components/reports/ReportHeader";
import ReportSummary from "../components/reports/ReportSummary";
import AddReportDialog from "../components/reports/AddReportDialog";
import EditReportDialog from "../components/reports/EditReportDialog";
import DeleteReportDialog from "../components/reports/DeleteReportDialog";

import FilterBar from "../common/FilterBar";
import DataTable from "../common/Datatable";

import { reportColumns } from "../constants/reports/reportColumns";
import { reportFilterFields } from "../constants/reports/reportFilters";
import { reportSortOptions } from "../constants/reports/reportSortOptions";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchReports } from "../redux/thunks/reportThunk";
import { ReportRecord } from "../redux/slices/reportSlice";

export default function ReportsPage() {
  const dispatch = useAppDispatch();
  const { reports, loading } = useAppSelector((state) => state.report);

  const [sortBy, setSortBy] = useState("nameAsc");

  const [filters, setFilters] = useState({
    search: "",
    reportType: "",
    status: "",
  });

  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [selectedReport, setSelectedReport] =
    useState<ReportRecord | null>(null);

  useEffect(() => {
    dispatch(fetchReports());
  }, [dispatch]);

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleEdit = (report: ReportRecord) => {
    setSelectedReport(report);
    setEditOpen(true);
  };

  const handleDelete = (report: ReportRecord) => {
    setSelectedReport(report);
    setDeleteOpen(true);
  };

  const filteredReports = useMemo(() => {
    return reports.filter((report) => {
      const search = filters.search.toLowerCase();

      const matchesSearch =
        search === "" ||
        report.reportName.toLowerCase().includes(search) ||
        report.generatedBy.toLowerCase().includes(search);

      const matchesReportType =
        filters.reportType === "" ||
        report.reportType === filters.reportType;

      const matchesStatus =
        filters.status === "" ||
        report.status === filters.status;

      return matchesSearch && matchesReportType && matchesStatus;
    });
  }, [reports, filters]);

  const sortedReports = useMemo(() => {
    const rows = [...filteredReports];

    rows.sort((a, b) => {
      switch (sortBy) {
        case "nameAsc":
          return a.reportName.localeCompare(b.reportName);

        case "nameDesc":
          return b.reportName.localeCompare(a.reportName);

        case "generatedOn":
          return b.generatedOn.localeCompare(a.generatedOn);

        case "status":
          return a.status.localeCompare(b.status);

        default:
          return 0;
      }
    });

    return rows;
  }, [filteredReports, sortBy]);

  const summary = useMemo(() => {
    const totalReports = sortedReports.length;
    const completedReports = sortedReports.filter(
      (report) => report.status === "Completed"
    ).length;
    const processingReports = sortedReports.filter(
      (report) => report.status === "Processing"
    ).length;
    const payrollReports = sortedReports.filter(
      (report) => report.reportType === "Payroll"
    ).length;

    return {
      totalReports,
      completedReports,
      processingReports,
      payrollReports,
    };
  }, [sortedReports]);

  return (
    <MainLayout>
      <ReportHeader onAdd={() => setAddOpen(true)} />

      <ReportSummary
        totalReports={summary.totalReports}
        completedReports={summary.completedReports}
        processingReports={summary.processingReports}
        payrollReports={summary.payrollReports}
      />

      <FilterBar
        filters={filters}
        sortBy={sortBy}
        fields={reportFilterFields}
        sortOptions={reportSortOptions}
        onChange={handleFilterChange}
        onSortChange={setSortBy}
      />

      <DataTable
        rows={sortedReports}
        columns={reportColumns(handleEdit, handleDelete)}
        loading={loading}
      />

      <AddReportDialog
        open={addOpen}
        onClose={() => setAddOpen(false)}
      />

      <EditReportDialog
        open={editOpen}
        report={selectedReport}
        onClose={() => {
          setEditOpen(false);
          setSelectedReport(null);
        }}
      />

      <DeleteReportDialog
        open={deleteOpen}
        report={selectedReport}
        onClose={() => {
          setDeleteOpen(false);
          setSelectedReport(null);
        }}
      />
    </MainLayout>
  );
}