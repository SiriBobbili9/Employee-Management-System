import LeaveHeader from "../components/leaves/LeaveHeader";
import LeaveSummary from "../components/leaves/LeaveSummary";
import LeaveFilters from "../components/leaves/LeaveFilters";
import LeaveTable from "../components/leaves/LeaveTable";
import MainLayout from "../components/layout/MainLayout";
export default function LeavesPage() {
  return (
    <MainLayout>
      <LeaveHeader />
      <LeaveSummary />
      <LeaveFilters />
      <LeaveTable />
    </MainLayout>
  );
}