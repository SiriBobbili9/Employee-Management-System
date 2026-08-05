import { createAsyncThunk } from "@reduxjs/toolkit";
import { departmentService } from "../../api/departments/services/departmentService";
import { Department } from "../slices/departmentSlice";

export const fetchDepartments = createAsyncThunk(
  "department/fetchDepartments",
  async () => {
    return await departmentService.getDepartments();
  }
);

export const createDepartment = createAsyncThunk(
  "department/createDepartment",
  async (department: Department) => {
    return await departmentService.createDepartment(department);
  }
);

export const updateDepartment = createAsyncThunk(
  "department/updateDepartment",
  async (department: Department) => {
    return await departmentService.updateDepartment(
      department.id,
      department
    );
  }
);

export const deleteDepartment = createAsyncThunk(
  "department/deleteDepartment",
  async (id: number) => {
    return await departmentService.deleteDepartment(id);
  }
);