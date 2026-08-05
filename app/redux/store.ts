import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import employeeReducer from "./slices/employeeSlice";
import departmentReducer from "./slices/departmentSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    employee: employeeReducer,
    department: departmentReducer,
  },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;