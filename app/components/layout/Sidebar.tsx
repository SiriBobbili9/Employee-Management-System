"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Drawer,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import { menuItems } from "@/app/constants/menuItems";


const drawerWidth = 250;

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          borderRight: "1px solid #E0E0E0",
          backgroundColor: "#ffffff",
        },
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          fontWeight="bold"
          color="primary"
        >
          EMS Portal
        </Typography>
      </Toolbar>

      <Box sx={{ overflow: "auto" }}>
        <List>
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <ListItem
                key={item.label}
                disablePadding
              >
                <ListItemButton
                  component={Link}
                  href={item.path}
                  selected={pathname === item.path}
                  sx={{
                    mx: 1,
                    borderRadius: 2,

                    "&.Mui-selected": {
                      backgroundColor: "primary.main",
                      color: "#fff",
                    },

                    "&.Mui-selected .MuiListItemIcon-root": {
                      color: "#fff",
                    },
                  }}
                >
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>

                  <ListItemText
                    primary={item.label}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
}