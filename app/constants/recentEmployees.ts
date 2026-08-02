export interface Employee {
  id: number;
  name: string;
  department: string;
  status: "Active" | "On Leave" | "Inactive";
}

export const recentEmployees: Employee[] = [
  {
    id: 1,
    name: "John Doe",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 2,
    name: "Alice Smith",
    department: "Human Resources",
    status: "On Leave",
  },
  {
    id: 3,
    name: "Rahul Sharma",
    department: "Finance",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Sarah Khan",
    department: "Sales",
    status: "Active",
  },
  {
    id: 5,
    name: "David Wilson",
    department: "IT Support",
    status: "Active",
  },
];