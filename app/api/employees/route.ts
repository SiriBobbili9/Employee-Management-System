import { NextRequest, NextResponse } from "next/server";

let employees = [
  {
    id: 1,
    employeeId: "EMP001",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "9876543210",
    department: "Engineering",
    designation: "Software Engineer",
    status: "Active",
  },
];

export async function GET() {
  return NextResponse.json(employees);
}

export async function POST(request: NextRequest) {
  try {
    const employee = await request.json();

    employee.id = employees.length + 1;

    employees.push(employee);

    return NextResponse.json(employee, {
      status: 201,
    });
  } catch {
    return NextResponse.json(
      {
        message: "Unable to create employee",
      },
      {
        status: 500,
      }
    );
  }
}