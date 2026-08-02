import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { SvgIconComponent } from "@mui/icons-material";

export interface Statistic {
  id: number;
  title: string;
  value: string;
  subtitle: string;
  icon: SvgIconComponent;
}

export const statistics: Statistic[] = [
  {
    id: 1,
    title: "Total Employees",
    value: "1,245",
    subtitle: "+18 this month",
    icon: PeopleIcon,
  },
  {
    id: 2,
    title: "Departments",
    value: "18",
    subtitle: "+2 new departments",
    icon: BusinessIcon,
  },
  {
    id: 3,
    title: "Attendance",
    value: "93%",
    subtitle: "Today's attendance",
    icon: EventAvailableIcon,
  },
  {
    id: 4,
    title: "Pending Leaves",
    value: "14",
    subtitle: "Awaiting approval",
    icon: AssignmentIcon,
  },
];