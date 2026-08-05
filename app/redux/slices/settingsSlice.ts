import { createSlice } from "@reduxjs/toolkit";
import {
	fetchSettings,
	updateSettings,
} from "../thunks/settingsThunk";

export interface SettingsFormData {
	companyName: string;
	companyEmail: string;
	companyAddress: string;
	fullName: string;
	profileEmail: string;
	phoneNumber: string;
	emailNotifications: boolean;
	pushNotifications: boolean;
	smsNotifications: boolean;
	currentPassword: string;
	newPassword: string;
	confirmPassword: string;
	darkMode: boolean;
}

interface SettingsState {
	data: SettingsFormData;
	loading: boolean;
	error: string | null;
}

export const defaultSettingsData: SettingsFormData = {
	companyName: "ABC Technologies",
	companyEmail: "hr@abc.com",
	companyAddress: "",
	fullName: "",
	profileEmail: "",
	phoneNumber: "",
	emailNotifications: true,
	pushNotifications: true,
	smsNotifications: false,
	currentPassword: "",
	newPassword: "",
	confirmPassword: "",
	darkMode: false,
};

const initialState: SettingsState = {
	data: defaultSettingsData,
	loading: false,
	error: null,
};

const settingsSlice = createSlice({
	name: "settings",
	initialState,
	reducers: {
		setSettingsField: (
			state,
			action: {
				payload: {
					field: keyof SettingsFormData;
					value: string | boolean;
				};
			}
		) => {
			const { field, value } = action.payload;
			state.data[field] = value as never;
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(fetchSettings.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchSettings.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchSettings.rejected, (state) => {
				state.loading = false;
				state.error = "Failed to fetch settings";
			})
			.addCase(updateSettings.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(updateSettings.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(updateSettings.rejected, (state) => {
				state.loading = false;
				state.error = "Failed to update settings";
			});
	},
});

export const { setSettingsField } = settingsSlice.actions;

export default settingsSlice.reducer;
