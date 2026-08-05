import { FilterOption } from "../../common/FilterBar";

export const attendanceSortOptions: FilterOption[] = [
  {
    label: "Employee (A-Z)",
    value: "employeeAsc",
  },
  {
    label: "Employee (Z-A)",
    value: "employeeDesc",
  },
  {
    label: "Department",
    value: "department",
  },
  {
    label: "Status",
    value: "status",
  },
];
