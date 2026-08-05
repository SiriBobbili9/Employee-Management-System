import { LeaveRecord } from "../../../redux/slices/leaveSlice";

const BASE_URL = "/api/leaves";

export const leaveService = {
  async getLeaves() {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch leaves");
    }

    return response.json();
  },

  async createLeave(leave: LeaveRecord) {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leave),
    });

    if (!response.ok) {
      throw new Error("Failed to create leave record");
    }

    return response.json();
  },

  async updateLeave(id: number, leave: LeaveRecord) {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leave),
    });

    if (!response.ok) {
      throw new Error("Failed to update leave record");
    }

    return response.json();
  },

  async deleteLeave(id: number) {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete leave record");
    }

    return response.json();
  },
};
