export interface Department {
  id: number;
  departmentCode: string;
  departmentName: string;
  manager: string;
  employees: number;
  status: "Active" | "Inactive";
}

export const departments: Department[] = [
  {
    id: 1,
    departmentCode: "DEP001",
    departmentName: "Engineering",
    manager: "John Doe",
    employees: 85,
    status: "Active",
  },
  {
    id: 2,
    departmentCode: "DEP002",
    departmentName: "Human Resources",
    manager: "Alice Smith",
    employees: 15,
    status: "Active",
  },
  {
    id: 3,
    departmentCode: "DEP003",
    departmentName: "Finance",
    manager: "Rahul Sharma",
    employees: 20,
    status: "Active",
  },
  {
    id: 4,
    departmentCode: "DEP004",
    departmentName: "Sales",
    manager: "Sarah Khan",
    employees: 45,
    status: "Active",
  },
  {
    id: 5,
    departmentCode: "DEP005",
    departmentName: "IT Support",
    manager: "David Wilson",
    employees: 12,
    status: "Inactive",
  },
];