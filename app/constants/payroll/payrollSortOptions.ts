import { FilterOption } from "../../common/FilterBar";

export const payrollSortOptions: FilterOption[] = [
  {
    label: "Employee (A-Z)",
    value: "employeeAsc",
  },
  {
    label: "Employee (Z-A)",
    value: "employeeDesc",
  },
  {
    label: "Net Salary",
    value: "netSalary",
  },
  {
    label: "Status",
    value: "status",
  },
];
