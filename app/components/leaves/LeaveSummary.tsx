"use client";

import Grid from "@mui/material/Grid";
import DashboardCard from "../dashboard/DashboardCard";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

interface LeaveSummaryProps {
  pending: number;
  approved: number;
  rejected: number;
}

export default function LeaveSummary({
  pending,
  approved,
  rejected,
}: LeaveSummaryProps) {
  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      <Grid size={{ xs: 12, md: 4 }}>
        <DashboardCard
          title="Pending Requests"
          value={String(pending)}
          subtitle="Awaiting approval"
          icon={<AccessTimeIcon />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <DashboardCard
          title="Approved"
          value={String(approved)}
          subtitle="This month"
          icon={<CheckCircleIcon />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <DashboardCard
          title="Rejected"
          value={String(rejected)}
          subtitle="This month"
          icon={<CancelIcon />}
        />
      </Grid>
    </Grid>
  );
}