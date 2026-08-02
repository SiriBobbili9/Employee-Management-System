"use client";

import Grid from "@mui/material/Grid";
import DashboardCard from "../dashboard/DashboardCard";

export default function LeaveSummary() {
  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      <Grid size={{ xs: 12, md: 4 }}>
        <DashboardCard
          title="Pending Requests"
          value="12"
          subtitle="Awaiting approval"
          icon={<>🟡</>}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <DashboardCard
          title="Approved"
          value="38"
          subtitle="This month"
          icon={<>🟢</>}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <DashboardCard
          title="Rejected"
          value="4"
          subtitle="This month"
          icon={<>🔴</>}
        />
      </Grid>
    </Grid>
  );
}