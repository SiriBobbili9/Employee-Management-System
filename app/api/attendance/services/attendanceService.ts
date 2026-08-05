import { AttendanceRecord } from "../../../redux/slices/attendanceSlice";

const BASE_URL = "/api/attendance";

export const attendanceService = {
  async getAttendance() {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch attendance");
    }

    return response.json();
  },

  async createAttendance(record: AttendanceRecord) {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(record),
    });

    if (!response.ok) {
      throw new Error("Failed to create attendance record");
    }

    return response.json();
  },

  async updateAttendance(id: number, record: AttendanceRecord) {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(record),
    });

    if (!response.ok) {
      throw new Error("Failed to update attendance record");
    }

    return response.json();
  },

  async deleteAttendance(id: number) {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete attendance record");
    }

    return response.json();
  },
};
