import { FilterOption } from "../../common/FilterBar";

export const reportSortOptions: FilterOption[] = [
  {
    label: "Report Name (A-Z)",
    value: "nameAsc",
  },
  {
    label: "Report Name (Z-A)",
    value: "nameDesc",
  },
  {
    label: "Generated Date",
    value: "generatedOn",
  },
  {
    label: "Status",
    value: "status",
  },
];
