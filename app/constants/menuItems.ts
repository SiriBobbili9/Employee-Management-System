import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PaymentsIcon from "@mui/icons-material/Payments";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export interface MenuItem {
  label: string;
  icon: React.ElementType;
  path: string;
}

export const menuItems: MenuItem[] = [
  {
    label: "Dashboard",
    icon: DashboardIcon,
    path: "/dashboard",
  },
  {
    label: "Employees",
    icon: PeopleIcon,
    path: "/employees",
  },
  {
    label: "Departments",
    icon: BusinessIcon,
    path: "/departments",
  },
  {
    label: "Attendance",
    icon: EventAvailableIcon,
    path: "/attendance",
  },
  {
    label: "Leaves",
    icon: AssignmentIcon,
    path: "/leaves",
  },
  {
    label: "Payroll",
    icon: PaymentsIcon,
    path: "/payroll",
  },
  {
    label: "Reports",
    icon: AssessmentIcon,
    path: "/reports",
  },
  {
    label: "Settings",
    icon: SettingsIcon,
    path: "/settings",
  },
  {
    label: "Logout",
    icon: LogoutIcon,
    path: "/logout",
  },
];