import { SettingsFormData } from "../../../redux/slices/settingsSlice";

const BASE_URL = "/api/settings";

export const settingsService = {
  async getSettings() {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch settings");
    }

    return response.json();
  },

  async updateSettings(settings: SettingsFormData) {
    const response = await fetch(BASE_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(settings),
    });

    if (!response.ok) {
      throw new Error("Failed to update settings");
    }

    return response.json();
  },
};
