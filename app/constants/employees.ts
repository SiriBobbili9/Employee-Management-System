export const recentEmployees = [
  {
    id: 1,
    name: "John Doe",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 2,
    name: "Alice Smith",
    department: "HR",
    status: "On Leave",
  },
  {
    id: 3,
    name: "Rahul Bobbili",
    department: "Finance",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Sarah Khan",
    department: "Sales",
    status: "Active",
  },
];

export interface Employee {
  id: number;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  status: "Active" | "On Leave" | "Inactive";
}

export const employees: Employee[] = [
  {
    id: 1,
    employeeId: "EMP001",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    department: "Engineering",
    designation: "Software Engineer",
    status: "Active",
  },
  {
    id: 2,
    employeeId: "EMP002",
    firstName: "Alice",
    lastName: "Smith",
    email: "alice.smith@example.com",
    phone: "+91 9876543211",
    department: "Human Resources",
    designation: "HR Executive",
    status: "On Leave",
  },
  {
    id: 3,
    employeeId: "EMP003",
    firstName: "Rahul",
    lastName: "Sharma",
    email: "rahul.sharma@example.com",
    phone: "+91 9876543212",
    department: "Finance",
    designation: "Accountant",
    status: "Inactive",
  },
  {
    id: 4,
    employeeId: "EMP004",
    firstName: "Sarah",
    lastName: "Khan",
    email: "sarah.khan@example.com",
    phone: "+91 9876543213",
    department: "Sales",
    designation: "Sales Manager",
    status: "Active",
  },
  {
    id: 5,
    employeeId: "EMP005",
    firstName: "David",
    lastName: "Wilson",
    email: "david.wilson@example.com",
    phone: "+91 9876543214",
    department: "IT Support",
    designation: "System Administrator",
    status: "Active",
  },
];