export interface Leave {
  id: number;
  employeeName: string;
  leaveType: "Casual" | "Sick" | "Earned";
  fromDate: string;
  toDate: string;
  days: number;
  reason: string;
  status: "Pending" | "Approved" | "Rejected";
}

export const leaves: Leave[] = [
  {
    id: 1,
    employeeName: "John Doe",
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
    leaveType: "Earned",
    fromDate: "2026-08-15",
    toDate: "2026-08-18",
    days: 4,
    reason: "Vacation",
    status: "Rejected",
  },
];