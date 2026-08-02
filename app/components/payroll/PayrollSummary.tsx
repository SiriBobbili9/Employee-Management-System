"use client";

import Grid from "@mui/material/Grid";
import DashboardCard from "../../components/dashboard/DashboardCard";
import PaymentsIcon from "@mui/icons-material/Payments";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

export default function PayrollSummary() {
  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      <Grid size={{ xs: 12, md: 4 }}>
        <DashboardCard
          title="Total Payroll"
          value="₹2.35 Cr"
          subtitle="This month"
          icon={<AccountBalanceWalletIcon />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <DashboardCard
          title="Paid Salaries"
          value="118"
          subtitle="Employees"
          icon={<PaymentsIcon />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <DashboardCard
          title="Pending Salaries"
          value="7"
          subtitle="Awaiting processing"
          icon={<PendingActionsIcon />}
        />
      </Grid>
    </Grid>
  );
}