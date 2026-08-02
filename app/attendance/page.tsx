import MainLayout from "../components/layout/MainLayout";
import AttendanceHeader  from "../components/attendanceRecords/AttendanceHeader";
import AttendanceSummary from "../components/attendanceRecords/AttendanceSummary";
import AttendanceTable    from "../components/attendanceRecords/AttendenceTable";
import AttendanceFilters  from "../components/attendanceRecords/AttendenceFilters";


export default function AttendancePage() {
  return (
    <MainLayout>
      <AttendanceHeader />

      <AttendanceSummary />

      <AttendanceFilters />

      <AttendanceTable />
    </MainLayout>
  );
}