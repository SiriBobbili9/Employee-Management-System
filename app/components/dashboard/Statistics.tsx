import Grid from "@mui/material/Grid";
import DashboardCard from "./DashboardCard";
import { statistics } from "../../constants/statistics";

export default function Statistics() {
  return (
    <Grid container spacing={3}>
      {statistics.map((item) => {
        const Icon = item.icon;

        return (
          <Grid
            key={item.id}
            size={{ xs: 12, sm: 6, md: 3 }}
          >
            <DashboardCard
              title={item.title}
              value={item.value}
              subtitle={item.subtitle}
              icon={<Icon />}   // ✅ Render the icon here
            />
          </Grid>
        );
      })}
    </Grid>
  );
}