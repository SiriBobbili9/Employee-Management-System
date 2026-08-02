import MainLayout from "../components/layout/MainLayout";
import ReportHeader from "../components/reports/ReportHeader";
import ReportSummary from "../components/reports/ReportSummary";
import ReportFilters from "../components/reports/ReportFilters";
import ReportCharts from "../components/reports/ReportCharts";
import RecentReports from "../components/reports/RecentReports";

export default function ReportsPage() {
  return (
    <MainLayout>
      <ReportHeader />
      <ReportSummary />
      <ReportFilters />
      <ReportCharts />
      <RecentReports />
    </MainLayout>
  );
}