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

export default function Navbar() {
  const isDarkMode = false;

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
            Dashboard
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#F5F7FA",
              px: 2,
              py: 0.5,
              borderRadius: 2,
              width: 320,
            }}
          >
            <SearchIcon color="action" />

            <InputBase
              placeholder="Search employees..."
              sx={{
                ml: 1,
                flex: 1,
              }}
            />
          </Box>
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
            S
          </Avatar>

          <Typography fontWeight={600}>
            Siri
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}