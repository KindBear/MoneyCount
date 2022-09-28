import React from "react";
import { styled } from "@mui/system";
import { Drawer as MuiDrawer }  from "@mui/material";

export const StyledDrawer = styled(MuiDrawer)({
    "& .MuiDrawer-paper": {
      width: "64px",
      backgroundColor: "rgba(23, 54, 52, 0.4)",
      paddingTop: "80px",
    },
  });
