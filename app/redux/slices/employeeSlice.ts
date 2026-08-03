import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createEmployee, fetchEmployees, updateEmployee } from "../thunks/employeeThunk";
export interface Employee {
  id: number;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  status: "Active" | "Inactive" | "On Leave";
}

interface EmployeeState {
  employees: Employee[];
  loading: boolean;
  error: string | null;
}

// const initialState: EmployeeState = {
//   employees: [],
//   loading: false,
//   error: null,
// };
const initialState: EmployeeState = {
  employees: [
    {
      id: 1,
      employeeId: "EMP001",
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phone: "9876543210",
      department: "Engineering",
      designation: "Software Engineer",
      status: "Active",
    },
    {
      id: 2,
      employeeId: "EMP002",
      firstName: "Alice",
      lastName: "Smith",
      email: "alice@example.com",
      phone: "9876543211",
      department: "HR",
      designation: "HR Executive",
      status: "On Leave",
    },
  ],
  loading: false,
  error: null,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,

  reducers: {
    setEmployees(state, action: PayloadAction<Employee[]>) {
      state.employees = action.payload;
    },

    addEmployee(state, action: PayloadAction<Employee>) {
      state.employees.push(action.payload);
    },

    deleteEmployee(state, action: PayloadAction<number>) {
      state.employees = state.employees.filter(
        employee => employee.id !== action.payload
      );
    },

    // updateEmployee(state, action: PayloadAction<Employee>) {
    //   const index = state.employees.findIndex(
    //     employee => employee.id === action.payload.id
    //   );

    //   if (index !== -1) {
    //     state.employees[index] = action.payload;
    //   }
    // },
  },
  extraReducers: (builder) => {
  builder

    .addCase(fetchEmployees.pending, (state) => {
      state.loading = true;
      state.error = null;
    })

    .addCase(fetchEmployees.fulfilled, (state, action) => {
      state.loading = false;
      state.employees = action.payload;
    })

    .addCase(fetchEmployees.rejected, (state) => {
      state.loading = false;
      state.error = "Failed to fetch employees";
    });
    builder.addCase(createEmployee.pending, (state) => {
      state.loading = true;
      state.error = null;
    })

    .addCase(createEmployee.fulfilled, (state, action) => {
      state.loading = false;
      state.employees.push(action.payload);
    })

    .addCase(createEmployee.rejected, (state) => {
      state.loading = false;
      state.error = "Failed to create an employee";
    });
    builder
      .addCase(updateEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = state.employees.map((employee) =>
          employee.id === action.payload.id ? action.payload : employee
        );
      })
      .addCase(updateEmployee.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to update employee";
      });
    
}
});

export const {
  setEmployees,
  addEmployee,
  deleteEmployee,
} = employeeSlice.actions;

export default employeeSlice.reducer;