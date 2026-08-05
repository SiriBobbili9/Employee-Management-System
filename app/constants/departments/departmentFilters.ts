import { managers } from "./managers";

export const departmentFilterFields = [
  {
    key: "search",
    label: "Search",
    type: "text",
    placeholder: "Department or Manager",
  },
  {
    key: "manager",
    label: "Manager",
    type: "select",
    options: managers.map((manager) => ({
      label: manager,
      value: manager,
    })),
  },
];