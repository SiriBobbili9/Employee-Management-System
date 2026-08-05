import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

interface DashboardCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
}

export default function DashboardCard({
  title,
  value,
  subtitle,
  icon,
}: DashboardCardProps) {
  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 3,
        height: "100%",
      }}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              color="text.secondary"
              variant="body2"
            >
              {title}
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ my: 1 }}
            >
              {value}
            </Typography>

            <Typography
              variant="body2"
              color="success.main"
            >
              {subtitle}
            </Typography>
          </Box>

          <Box
            sx={{
              width: "40px",
              height:"40px",
              bgcolor: "primary.main",
              borderRadius: "50%",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            {icon}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}