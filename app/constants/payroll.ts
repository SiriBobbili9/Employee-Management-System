export interface Payroll {
  id: number;
  employeeId: string;
  employeeName: string;
  department: string;
  basicSalary: number;
  hra: number;
 allowances: number;
  deductions: number;
  bonus: number;
  netSalary: number;
  paymentMonth: string;
  status: "Paid" | "Pending";
}

export const payrolls: Payroll[] = [
  {
    id: 1,
    employeeId: "EMP001",
    employeeName: "John Doe",
    department: "Engineering",
    basicSalary: 70000,
    hra: 15000,
    allowances: 5000,
    deductions: 2000,
    bonus: 3000,
    netSalary: 91000,
    paymentMonth: "August 2026",
    status: "Paid",
  },
  {
    id: 2,
    employeeId: "EMP002",
    employeeName: "Alice Smith",
    department: "Human Resources",
    basicSalary: 50000,
    hra: 10000,
    allowances: 3000,
    deductions: 1500,
    bonus: 2000,
    netSalary: 63500,
    paymentMonth: "August 2026",
    status: "Pending",
  },
  {
    id: 3,
    employeeId: "EMP003",
    employeeName: "Rahul Sharma",
    department: "Finance",
    basicSalary: 60000,
    hra: 12000,
    allowances: 4000,
    deductions: 2500,
    bonus: 2500,
    netSalary: 76000,
    paymentMonth: "August 2026",
    status: "Paid",
  },
];