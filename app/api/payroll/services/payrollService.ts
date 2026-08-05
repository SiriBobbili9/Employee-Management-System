import { PayrollRecord } from "../../../redux/slices/payrollSlice";

const BASE_URL = "/api/payroll";

export const payrollService = {
  async getPayrolls() {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch payroll records");
    }

    return response.json();
  },

  async createPayroll(payroll: PayrollRecord) {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payroll),
    });

    if (!response.ok) {
      throw new Error("Failed to create payroll record");
    }

    return response.json();
  },

  async updatePayroll(id: number, payroll: PayrollRecord) {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payroll),
    });

    if (!response.ok) {
      throw new Error("Failed to update payroll record");
    }

    return response.json();
  },

  async deletePayroll(id: number) {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete payroll record");
    }

    return response.json();
  },
};
