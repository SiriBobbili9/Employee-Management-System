import { createAsyncThunk } from "@reduxjs/toolkit";
import { employeeService } from "../../api/employees/services/employeeService";
import { Employee } from "../slices/employeeSlice";

export const fetchEmployees = createAsyncThunk(
  "employee/fetchEmployees",
  async () => {
    return await employeeService.getEmployees();
  },
);
export const createEmployee = createAsyncThunk(
  "employee/createEmployee",
  async (employee: Employee) => {
    return await employeeService.createEmployee(employee);
  },
);
export const updateEmployee = createAsyncThunk(
  "employee/updateEmployee",
  async (employee: Employee) => {
    return await employeeService.updateEmployee(employee.id, employee);
  },
);
export const deleteEmployee = createAsyncThunk(
  "employee/deleteEmployee",
  async (id: number) => {
    return await employeeService.deleteEmployee(id);
  }
);
