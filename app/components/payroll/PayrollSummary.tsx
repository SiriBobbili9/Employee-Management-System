"use client";

import Grid from "@mui/material/Grid";
import DashboardCard from "../../components/dashboard/DashboardCard";
import PaymentsIcon from "@mui/icons-material/Payments";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

interface PayrollSummaryProps {
  totalPayroll: number;
  paidCount: number;
  pendingCount: number;
}

export default function PayrollSummary({
  totalPayroll,
  paidCount,
  pendingCount,
}: PayrollSummaryProps) {
  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      <Grid size={{ xs: 12, md: 4 }}>
        <DashboardCard
          title="Total Payroll"
          value={`INR ${totalPayroll.toLocaleString("en-IN")}`}
          subtitle="This month"
          icon={<AccountBalanceWalletIcon />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <DashboardCard
          title="Paid Salaries"
          value={String(paidCount)}
          subtitle="Employees"
          icon={<PaymentsIcon />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <DashboardCard
          title="Pending Salaries"
          value={String(pendingCount)}
          subtitle="Awaiting processing"
          icon={<PendingActionsIcon />}
        />
      </Grid>
    </Grid>
  );
}