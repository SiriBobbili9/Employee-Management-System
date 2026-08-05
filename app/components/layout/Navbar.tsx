"use client";

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useAppSelector } from "@/app/redux/hooks";

export default function Navbar() {
  const isDarkMode = false;
  const { user } = useAppSelector((state) => state.auth);
  const userName = user?.email.split("@")[0] || "User";

  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={1}
      sx={{
        width: "calc(100% - 250px)",
        ml: "250px",
        backgroundColor: "#fff",
        color: "#000",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            Employee Management System
          </Typography>

          
        </Box>

        {/* Right Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton>
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton>
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          <Avatar
            sx={{
              bgcolor: "primary.main",
            }}
          >
            {userName.charAt(0).toUpperCase()}
          </Avatar>

          <Typography fontWeight={600}>
            {userName}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}