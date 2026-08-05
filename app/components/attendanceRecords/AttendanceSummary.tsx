import { Grid, Paper, Typography, Box } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

interface AttendanceSummaryProps {
  totalEmployees: number;
  present: number;
  absent: number;
  late: number;
}

export default function AttendanceSummary({
  totalEmployees,
  present,
  absent,
  late,
}: AttendanceSummaryProps) {
  const summary = [
    {
      title: "Total Employees",
      value: String(totalEmployees),
      icon: <PeopleIcon />,
    },
    {
      title: "Present",
      value: String(present),
      icon: <CheckCircleIcon />,
    },
    {
      title: "Absent",
      value: String(absent),
      icon: <CancelIcon />,
    },
    {
      title: "Late",
      value: String(late),
      icon: <AccessTimeIcon />,
    },
  ];

  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      {summary.map((item) => (
        <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Box>
                <Typography color="text.secondary" variant="body2">
                  {item.title}
                </Typography>

                <Typography variant="h4" fontWeight="bold" sx={{ mt: 1 }}>
                  {item.value}
                </Typography>
              </Box>

              <Box
                sx={{
                  p: 1.5,
                  bgcolor: "primary.main",
                  borderRadius: "50%",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </Box>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}