"use client";
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddDepartmentDialog from "./AddDepartmentDialog";


export default function DepartmentHeader() {
  
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleAddDepartment = () => {
    setOpen(true);
  };
  return (
    <Box
      sx={{
        mb: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h4" fontWeight="bold">
          Departments
        </Typography>

        <Typography color="text.secondary">
          Manage your company departments.
        </Typography>
      </Box>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleAddDepartment}
      >
        Add Department
      </Button>
      <AddDepartmentDialog
        open={open}
        onClose={handleClose}
      />
    </Box>
  );
}
