import React from "react";
import Box from "@mui/material/Box";
import Tabs  from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useRouteMatch } from "../hooks/useRouteMatch";

const SettingsPage = () => {
  const routeMatch = useRouteMatch(["/settings", "/settings/categories"]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <>
      <Box
        sx={{
          height: "48px",
          paddingLeft: "8px",
        }}
      >
        <Tabs value={currentTab}>
          <Tab label="General" value="/settings" to="/settings" component={Link} />
          <Tab label="Categories" value="/settings/categories" to="/settings/categories" component={Link} />
        </Tabs>
      </Box>
      <Box
        sx={{
          height: "calc(100vh - 112px)",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default SettingsPage;
