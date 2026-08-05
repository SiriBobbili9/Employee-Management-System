import { createAsyncThunk } from "@reduxjs/toolkit";

interface LoginPayload {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async (data: LoginPayload, thunkAPI) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        return thunkAPI.rejectWithValue(result.message);
      }

      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);