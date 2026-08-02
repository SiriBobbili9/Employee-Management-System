"use client";

import { Box, Typography } from "@mui/material";

export default function DashboardHeader() {
  const userName = "Siri";

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Box
      sx={{
        mb: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <Box>
        <Typography
          variant="h4"
          fontWeight="bold"
        >
          Dashboard
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          Welcome back, {userName} 👋
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          Manage your employees efficiently.
        </Typography>
      </Box>

      <Typography
        variant="body1"
        fontWeight={600}
      >
        {today}
      </Typography>
    </Box>
  );
}