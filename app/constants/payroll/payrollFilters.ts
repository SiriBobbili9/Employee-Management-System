import { FilterField } from "../../common/FilterBar";
import { departments } from "../departmentsValues";

export const payrollFilterFields: FilterField[] = [
  {
    key: "search",
    label: "Search",
    type: "text",
    placeholder: "Employee name or ID",
  },
  {
    key: "department",
    label: "Department",
    type: "select",
    options: departments.map((department) => ({
      label: department,
      value: department,
    })),
  },
  {
    key: "status",
    label: "Status",
    type: "select",
    options: [
      { label: "Paid", value: "Paid" },
      { label: "Pending", value: "Pending" },
    ],
  },
];
