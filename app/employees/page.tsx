"use client";
import MainLayout from "../components/layout/MainLayout";
import EmployeeHeader from "../components/employees/EmployeeHeader";
import EmployeeSearch from "../components/employees/EmployeeSearch";
import EmployeeTable from "../components/employees/EmployeeTable";
import { useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";
import { fetchEmployees } from "../redux/thunks/employeeThunk";

export default function EmployeesPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);
  return (
    <MainLayout>
      <EmployeeHeader />

      <EmployeeSearch />

      <EmployeeTable />
    </MainLayout>
  );
}