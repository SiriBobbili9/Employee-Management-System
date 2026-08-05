import { ReportRecord } from "../../../redux/slices/reportSlice";

const BASE_URL = "/api/reports";

export const reportService = {
  async getReports() {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch reports");
    }

    return response.json();
  },

  async createReport(report: ReportRecord) {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(report),
    });

    if (!response.ok) {
      throw new Error("Failed to create report");
    }

    return response.json();
  },

  async updateReport(id: number, report: ReportRecord) {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(report),
    });

    if (!response.ok) {
      throw new Error("Failed to update report");
    }

    return response.json();
  },

  async deleteReport(id: number) {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete report");
    }

    return response.json();
  },
};
