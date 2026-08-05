import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchDepartments,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} from "../thunks/departmentThunk";

export interface Department {
  id: number;
  departmentCode: string;
  departmentName: string;
  manager: string;
  employeesCount: number;
  status: "Active" | "Inactive";
  location: string;
}

interface DepartmentState {
  departments: Department[];
  loading: boolean;
  error: string | null;
}

const initialState: DepartmentState = {
  departments: [
    {
      id: 1,
      departmentCode: "DEP001",
      departmentName: "Engineering",
      manager: "John Doe",
      employeesCount: 45,
      status: "Active",
      location: "Building A, Floor 3",
    },
    {
      id: 2,
      departmentCode: "DEP002",
      departmentName: "Human Resources",
      manager: "Alice Smith",
      employeesCount: 12,
      status: "Active",
      location: "Building B, Floor 2",
    },
  ],
  loading: false,
  error: null,
};

const departmentSlice = createSlice({
  name: "department",
  initialState,

  reducers: {
    setDepartments(state, action: PayloadAction<Department[]>) {
      state.departments = action.payload;
    },

    addDepartment(state, action: PayloadAction<Department>) {
      state.departments.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchDepartments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDepartments.fulfilled, (state, action) => {
        state.loading = false;
        state.departments = action.payload;
      })
      .addCase(fetchDepartments.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch departments";
      })

      // Create
      .addCase(createDepartment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createDepartment.fulfilled, (state, action) => {
        state.loading = false;
        state.departments.push(action.payload);
      })
      .addCase(createDepartment.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to create department";
      })

      // Update
      .addCase(updateDepartment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateDepartment.fulfilled, (state, action) => {
        state.loading = false;
        state.departments = state.departments.map((department) =>
          department.id === action.payload.id
            ? action.payload
            : department
        );
      })
      .addCase(updateDepartment.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to update department";
      })

      // Delete
      .addCase(deleteDepartment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteDepartment.fulfilled, (state, action) => {
        state.loading = false;
        state.departments = state.departments.filter(
          (department) => department.id !== action.payload.department.id
        );
      })
      .addCase(deleteDepartment.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to delete department";
      });
  },
});

export const {
  setDepartments,
  addDepartment,
} = departmentSlice.actions;

export default departmentSlice.reducer;