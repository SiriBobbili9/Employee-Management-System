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
  {
    id: 2,
    employeeId: "EMP002",
    firstName: "Dell",
    lastName: "Doe",
    email: "dell@example.com",
    phone: "9876543280",
    department: "Engineering",
    designation: "Software Engineer",
    status: "Active",
  },
  {
    id: 3,
    employeeId: "EMP003",
    firstName: "Bruise",
    lastName: "Doe",
    email: "bruise@example.com",
    phone: "9876543270",
    department: "Engineering",
    designation: "Software Engineer",
    status: "Active",
  },
  {
    id: 4,
    employeeId: "EMP004",
    firstName: "Kenneth",
    lastName: "Doe",
    email: "kenneth@example.com",
    phone: "9876543260",
    department: "Engineering",
    designation: "Software Engineer",
    status: "Active",
  },
  {
    id: 5,
    employeeId: "EMP005",
    firstName: "John",
    lastName: "Doe",
    email: "bainen.doe@example.com",
    phone: "9876543250",
    department: "Engineering",
    designation: "Software Engineer",
    status: "Active",
  },
  {
    id: 6,
    employeeId: "EMP006",
    firstName: "Kamal",
    lastName: "Doe",
    email: "kamal@example.com",
    phone: "9876543240",
    department: "Engineering",
    designation: "Software Engineer",
    status: "Active",
  },
  {
    id: 7,
    employeeId: "EMP007",
    firstName: "Stephen",
    lastName: "Doe",
    email: "stephen@example.com",
    phone: "9876543230",
    department: "Engineering",
    designation: "Software Engineer",
    status: "Active",
  },
  {
    id: 8,
    employeeId: "EMP008",
    firstName: "Kennan",
    lastName: "Doe",
    email: "kennan@example.com",
    phone: "9876543220",
    department: "Engineering",
    designation: "Software Engineer",
    status: "Active",
  },
  {
    id: 9,
    employeeId: "EMP009",
    firstName: "Priston",
    lastName: "Doe",
    email: "priston@example.com",
    phone: "9876543211",
    department: "Engineering",
    designation: "Software Engineer",
    status: "Active",
  },
  {
    id: 10,
    employeeId: "EMP010",
    firstName: "Zoe",
    lastName: "Doe",
    email: "zoe@example.com",
    phone: "9876543210",
    department: "Engineering",
    designation: "Software Engineer",
    status: "Active",
  },
  {
    id: 11,
    employeeId: "EMP011",
    firstName: "Cristina",
    lastName: "Doe",
    email: "cristina@example.com",
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