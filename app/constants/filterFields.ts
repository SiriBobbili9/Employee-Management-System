import { departments } from "../constants/departmentsValues";
import { employeeStatus } from "../constants/employeeStatus";
export const sortOptions = [
  { label: "Name (A-Z)", value: "nameAsc" },
  { label: "Name (Z-A)", value: "nameDesc" },
  { label: "Department", value: "department" },
  { label: "Employee ID", value: "employeeId" },
];

export const filterFields = [
  {
    key: "search",
    label: "Search",
    type: "text",
    placeholder: "Name, Email or Employee ID",
  },
  {
    key: "department",
    label: "Department",
    type: "select",
    options: departments.map((d) => ({
      label: d,
      value: d,
    })),
  },
  {
    key: "status",
    label: "Status",
    type: "select",
    options: employeeStatus.map((s) => ({
      label: s,
      value: s,
    })),
  },
];
