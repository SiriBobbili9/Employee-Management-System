import MainLayout from "../components/layout/MainLayout";
import PayrollHeader from "../components/payroll/PayrollHeader";
import PayrollSummary from "../components/payroll/PayrollSummary";
import PayrollFilters from "../components/payroll/PayrollFilters";
import PayrollTable from "../components/payroll/PayrollTable";

export default function PayrollPage() {
  return (
    <MainLayout>
      <PayrollHeader />
      <PayrollSummary />
      <PayrollFilters />
      <PayrollTable />
    </MainLayout>
  );
}