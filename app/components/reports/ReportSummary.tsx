"use client";

import Grid from "@mui/material/Grid";
import DashboardCard from "../../components/dashboard/DashboardCard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import PaymentsIcon from "@mui/icons-material/Payments";

interface ReportSummaryProps {
  totalReports: number;
  completedReports: number;
  processingReports: number;
  payrollReports: number;
}

export default function ReportSummary({
  totalReports,
  completedReports,
  processingReports,
  payrollReports,
}: ReportSummaryProps) {
  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      <Grid size={{ xs: 12, md: 3 }}>
        <DashboardCard
          title="Total Reports"
          value={String(totalReports)}
          subtitle="Generated"
          icon={<AssessmentIcon />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <DashboardCard
          title="Completed"
          value={String(completedReports)}
          subtitle="Ready reports"
          icon={<CheckCircleIcon />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <DashboardCard
          title="Processing"
          value={String(processingReports)}
          subtitle="In progress"
          icon={<PendingActionsIcon />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <DashboardCard
          title="Payroll Reports"
          value={String(payrollReports)}
          subtitle="By type"
          icon={<PaymentsIcon />}
        />
      </Grid>
    </Grid>
  );
}