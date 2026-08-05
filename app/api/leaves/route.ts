import { NextRequest, NextResponse } from "next/server";

interface LeaveRecord {
  id: number;
  employeeName: string;
  department: string;
  leaveType: "Casual" | "Sick" | "Earned";
  fromDate: string;
  toDate: string;
  days: number;
  reason: string;
  status: "Pending" | "Approved" | "Rejected";
}

let leaves: LeaveRecord[] = [
  {
    id: 1,
    employeeName: "John Doe",
    department: "Engineering",
    leaveType: "Casual",
    fromDate: "2026-08-10",
    toDate: "2026-08-11",
    days: 2,
    reason: "Family Function",
    status: "Pending",
  },
  {
    id: 2,
    employeeName: "Alice Smith",
    department: "Human Resources",
    leaveType: "Sick",
    fromDate: "2026-08-05",
    toDate: "2026-08-05",
    days: 1,
    reason: "Fever",
    status: "Approved",
  },
  {
    id: 3,
    employeeName: "Rahul Sharma",
    department: "Finance",
    leaveType: "Earned",
    fromDate: "2026-08-15",
    toDate: "2026-08-18",
    days: 4,
    reason: "Vacation",
    status: "Rejected",
  },
];

export async function GET() {
  return NextResponse.json(leaves);
}

export async function POST(request: NextRequest) {
  try {
    const leave = await request.json();

    const newLeave: LeaveRecord = {
      id: leaves.length > 0 ? Math.max(...leaves.map((l) => l.id)) + 1 : 1,
      ...leave,
    };

    leaves = [...leaves, newLeave];

    return NextResponse.json(newLeave, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: "Unable to create leave record" },
      { status: 500 }
    );
  }
}
