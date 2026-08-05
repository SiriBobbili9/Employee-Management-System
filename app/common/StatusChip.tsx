"use client";

import { Chip } from "@mui/material";

interface StatusChipProps {
  status: string;
}

export default function StatusChip({
  status,
}: StatusChipProps) {
  const getColor = () => {
    switch (status) {
      case "Active":
        return "success";

      case "Inactive":
        return "error";

      case "On Leave":
        return "warning";

      case "Pending":
        return "warning";

      case "Approved":
        return "success";

      case "Rejected":
        return "error";

      case "Present":
        return "success";

      case "Absent":
        return "error";

      case "Late":
        return "warning";

      default:
        return "default";
    }
  };

  return (
    <Chip
      label={status}
      color={getColor()}
      size="small"
    />
  );
}