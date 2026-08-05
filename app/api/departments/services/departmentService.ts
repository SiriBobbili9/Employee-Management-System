import { Department } from "../../../redux/slices/departmentSlice";

const BASE_URL = "/api/departments";

export const departmentService = {
  async getDepartments() {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch departments");
    }

    return response.json();
  },

  async getDepartmentById(id: number) {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch department");
    }

    return response.json();
  },

  async createDepartment(department: Department) {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(department),
    });

    if (!response.ok) {
      throw new Error("Failed to create department");
    }

    return response.json();
  },

  async updateDepartment(id: number, department: Department) {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(department),
    });

    if (!response.ok) {
      throw new Error("Failed to update department");
    }

    return response.json();
  },

  async deleteDepartment(id: number) {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete department");
    }

    return response.json();
  },
};