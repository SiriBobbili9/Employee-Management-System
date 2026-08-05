export interface Department {
  id: number;
  departmentCode: string;
  departmentName: string;
  manager: string;
  employeesCount: number;
  status: "Active" | "Inactive";
  location: string;
}

export const departments: Department[] = [
  {
    id: 1,
    departmentCode: "DEP001",
    departmentName: "Engineering",
    manager: "John Doe",
    employeesCount: 85,
    status: "Active",
    location: "Building A, Floor 3",
  },
  {
    id: 2,
    departmentCode: "DEP002",
    departmentName: "Human Resources",
    manager: "Alice Smith",
    employeesCount: 15,
    status: "Active",
    location: "Building B, Floor 2",
  },
  {
    id: 3,
    departmentCode: "DEP003",
    departmentName: "Finance",
    manager: "Rahul Sharma",
    employeesCount: 20,
    status: "Active",
    location: "Building C, Floor 1",
  },
  {
    id: 4,
    departmentCode: "DEP004",
    departmentName: "Sales",
    manager: "Sarah Khan",
    employeesCount: 45,
    status: "Active",
    location: "Building D, Floor 4",
  },
  {
    id: 5,
    departmentCode: "DEP005",
    departmentName: "IT Support",
    manager: "David Wilson",
    employeesCount: 12,
    status: "Inactive",
    location: "Building E, Floor 5",
  },
];