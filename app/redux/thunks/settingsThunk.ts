import { createAsyncThunk } from "@reduxjs/toolkit";
import { settingsService } from "../../api/settings/services/settingsService";
import type { SettingsFormData } from "../slices/settingsSlice";

export const fetchSettings = createAsyncThunk(
  "settings/fetchSettings",
  async () => {
    return await settingsService.getSettings();
  }
);

export const updateSettings = createAsyncThunk(
  "settings/updateSettings",
  async (settings: SettingsFormData) => {
    return await settingsService.updateSettings(settings);
  }
);
