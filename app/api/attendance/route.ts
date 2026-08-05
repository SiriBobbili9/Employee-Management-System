import { NextRequest, NextResponse } from "next/server";

interface AttendanceRecord {
  id: number;
  employeeName: string;
  department: string;
  checkIn: string;
  checkOut: string;
  workingHours: string;
  status: "Present" | "Absent" | "Late" | "Half Day";
}

let attendanceRecords = [
  {
    id: 1,
    employeeName: "John Doe",
    department: "Engineering",
    checkIn: "09:00 AM",
    checkOut: "06:00 PM",
    workingHours: "9h 00m",
    status: "Present",
  },
  {
    id: 2,
    employeeName: "Alice Smith",
    department: "Human Resources",
    checkIn: "09:45 AM",
    checkOut: "06:00 PM",
    workingHours: "8h 15m",
    status: "Late",
  },
  {
    id: 3,
    employeeName: "Rahul Sharma",
    department: "Finance",
    checkIn: "-",
    checkOut: "-",
    workingHours: "0h 00m",
    status: "Absent",
  },
  {
    id: 4,
    employeeName: "Sarah Khan",
    department: "Sales",
    checkIn: "09:15 AM",
    checkOut: "01:00 PM",
    workingHours: "3h 45m",
    status: "Half Day",
  },
  {
    id: 5,
    employeeName: "David Wilson",
    department: "IT Support",
    checkIn: "08:50 AM",
    checkOut: "06:05 PM",
    workingHours: "9h 15m",
    status: "Present",
  },
] as AttendanceRecord[];

export async function GET() {
  return NextResponse.json(attendanceRecords);
}

export async function POST(request: NextRequest) {
  try {
    const record = await request.json();

    const newRecord = {
      id:
        attendanceRecords.length > 0
          ? Math.max(...attendanceRecords.map((r) => r.id)) + 1
          : 1,
      ...record,
    };

    attendanceRecords = [...attendanceRecords, newRecord];

    return NextResponse.json(newRecord, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: "Unable to create attendance record" },
      { status: 500 }
    );
  }
}
