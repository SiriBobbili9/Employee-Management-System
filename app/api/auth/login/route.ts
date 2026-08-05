import { NextRequest, NextResponse } from "next/server";

const users = [
  {
    id: 1,
    email: "admin@ems.com",
    password: "Admin@123",
    role: "Admin",
    name: "System Administrator",
  },
  {
    id: 2,
    email: "hr@ems.com",
    password: "Hr@123",
    role: "HR",
    name: "HR Manager",
  },
];

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and Password are required",
        },
        { status: 400 }
      );
    }

    const user = users.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password
    );

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password",
        },
        { status: 401 }
      );
    }

    // Don't send password to frontend
    const { password: _, ...userData } = user;

    return NextResponse.json({
      success: true,
      message: "Login Successful",
      token: "dummy-jwt-token-123456789",
      user: userData,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}