import MainLayout from "../components/layout/MainLayout";
import DepartmentHeader from "../components/departments/DepartmentHeader";
import DepartmentSearch from "../components/departments/DepartmentSearch";
import DepartmentTable from "../components/departments/DepartmentTable";

export default function DepartmentsPage() {
  return (
    <MainLayout>
      <DepartmentHeader />

      <DepartmentSearch />

      <DepartmentTable />
    </MainLayout>
  );
}