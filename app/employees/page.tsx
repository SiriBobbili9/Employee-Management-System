import MainLayout from "../components/layout/MainLayout";
import EmployeeHeader from "../components/employees/EmployeeHeader";
import EmployeeSearch from "../components/employees/EmployeeSearch";
import EmployeeTable from "../components/employees/EmployeeTable";

export default function EmployeesPage() {
  return (
    <MainLayout>
      <EmployeeHeader />

      <EmployeeSearch />

      <EmployeeTable />
    </MainLayout>
  );
}