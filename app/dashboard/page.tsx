import MainLayout from "../components/layout/MainLayout";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Statistics from "../components/dashboard/Statistics";
import AttendanceChart from "../components/dashboard/AttendanceChart";
import RecentEmployees from "../components/dashboard/RecentEmployees";

export default function DashboardPage() {
  return (
    <MainLayout>
      <DashboardHeader />

      <Statistics />

      <AttendanceChart />

      <RecentEmployees />
    </MainLayout>
  );
}