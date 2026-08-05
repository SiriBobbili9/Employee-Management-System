import {
  FilterField,
  FilterOption,
} from "../../common/FilterBar";
import { departments } from "../departmentsValues";

const departmentOptions: FilterOption[] = departments.map((department) => ({
  label: department,
  value: department,
}));

const statusOptions: FilterOption[] = [
  { label: "Present", value: "Present" },
  { label: "Absent", value: "Absent" },
  { label: "Late", value: "Late" },
  { label: "Half Day", value: "Half Day" },
];

export const attendanceFilterFields: FilterField[] = [
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
    options: departmentOptions,
  },
  {
    key: "status",
    label: "Status",
    type: "select",
    options: statusOptions,
  },
];
