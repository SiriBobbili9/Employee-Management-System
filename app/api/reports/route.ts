import { NextRequest, NextResponse } from "next/server";

interface ReportRecord {
  id: number;
  reportName: string;
  generatedBy: string;
  generatedOn: string;
  reportType: "Employee" | "Attendance" | "Leave" | "Payroll";
  status: "Completed" | "Processing";
}

let reports: ReportRecord[] = [
  {
    id: 1,
    reportName: "Monthly Attendance Report",
    generatedBy: "Admin",
    generatedOn: "2026-08-01",
    reportType: "Attendance",
    status: "Completed",
  },
  {
    id: 2,
    reportName: "Payroll Summary",
    generatedBy: "HR",
    generatedOn: "2026-08-02",
    reportType: "Payroll",
    status: "Completed",
  },
  {
    id: 3,
    reportName: "Employee Directory",
    generatedBy: "Admin",
    generatedOn: "2026-08-03",
    reportType: "Employee",
    status: "Processing",
  },
];

export async function GET() {
  return NextResponse.json(reports);
}

export async function POST(request: NextRequest) {
  try {
    const report = await request.json();

    const newReport: ReportRecord = {
      id: reports.length > 0 ? Math.max(...reports.map((r) => r.id)) + 1 : 1,
      ...report,
    };

    reports = [...reports, newReport];

    return NextResponse.json(newReport, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: "Unable to create report" },
      { status: 500 }
    );
  }
}
