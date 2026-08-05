import { FilterField } from "../../common/FilterBar";
import { departments } from "../departmentsValues";

export const leaveFilterFields: FilterField[] = [
  {
    key: "search",
    label: "Search",
    type: "text",
    placeholder: "Employee name",
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
      { label: "Pending", value: "Pending" },
      { label: "Approved", value: "Approved" },
      { label: "Rejected", value: "Rejected" },
    ],
  },
];
