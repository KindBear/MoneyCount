import React from "react";
import { Typography } from "@mui/material";
import { AppHeader } from "./StyleMui/AppHeader";
import { useLocation } from "react-router-dom";
import { HEADER_TITLES } from "../constants/headerTitle";

const Header = () => {
  const location = useLocation();

  return (
<AppHeader>
<Typography variant="h3">
{HEADER_TITLES[location.pathname]}
</Typography>
</AppHeader>
  );
};

export default Header;
