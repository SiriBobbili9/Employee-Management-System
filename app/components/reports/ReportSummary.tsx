"use client";

import Grid from "@mui/material/Grid";
import DashboardCard from "../../components/dashboard/DashboardCard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import GroupsIcon from "@mui/icons-material/Groups";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PaymentsIcon from "@mui/icons-material/Payments";

export default function ReportSummary() {
  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      <Grid size={{ xs: 12, md: 3 }}>
        <DashboardCard
          title="Total Reports"
          value="156"
          subtitle="Generated"
          icon={<AssessmentIcon />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <DashboardCard
          title="Employees"
          value="125"
          subtitle="Active Employees"
          icon={<GroupsIcon />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <DashboardCard
          title="Attendance"
          value="96%"
          subtitle="Average"
          icon={<EventAvailableIcon />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <DashboardCard
          title="Payroll"
          value="₹2.35 Cr"
          subtitle="Monthly"
          icon={<PaymentsIcon />}
        />
      </Grid>
    </Grid>
  );
}