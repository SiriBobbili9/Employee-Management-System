import { NextRequest, NextResponse } from "next/server";

interface SettingsData {
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

let settingsData: SettingsData = {
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

export async function GET() {
  return NextResponse.json(settingsData);
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    settingsData = {
      ...settingsData,
      ...body,
    };

    return NextResponse.json(settingsData);
  } catch {
    return NextResponse.json(
      { message: "Unable to update settings" },
      { status: 500 }
    );
  }
}
