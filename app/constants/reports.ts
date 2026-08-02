export interface Report {
  id: number;
  reportName: string;
  generatedBy: string;
  generatedOn: string;
  reportType: "Employee" | "Attendance" | "Leave" | "Payroll";
  status: "Completed" | "Processing";
}

export const reports: Report[] = [
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