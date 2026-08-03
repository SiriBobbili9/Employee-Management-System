import { Employee } from "../../../redux/slices/employeeSlice";

const BASE_URL = "/api/employees";

export const employeeService = {
  async getEmployees() {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch employees");
    }

    return response.json();
  },

  async getEmployeeById(id: number) {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch employee");
    }

    return response.json();
  },

  async createEmployee(employee: Employee) {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });

    if (!response.ok) {
      throw new Error("Failed to create employee");
    }

    return response.json();
  },

  async updateEmployee(id: number, employee: Employee) {
    const response = await fetch(`/api/employees/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });

    if (!response.ok) {
      throw new Error("Failed to update employee");
    }

    return response.json();
  },

  async deleteEmployee(id: number) {
  const response = await fetch(`/api/employees/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete employee");
  }

  return response.json();
}
};
