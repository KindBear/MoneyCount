import React from "react";
import { Link } from "react-router-dom";
import { StyledDrawer } from "./StyleMui/StyledDrawer";
import MenuButton from "./StyleMui/MenuButton";
import { NAV_ROUTES } from "../navRoutes";
import { useRouteMatch } from "../hooks/useRouteMatch";

const Drawer = () => {
  const routeMatch = useRouteMatch([
    "/",
    "/transactions",
    "/settings/categories",
    "/settings",
    "/accounts",
  ]);
  const currentPath = routeMatch?.pattern?.path;

  return (
    <StyledDrawer variant="permanent">
      {NAV_ROUTES.map((item) => {
        const { title, icon, to, match } = item;

        return (
          <Link key={title} to={to}>
            <MenuButton active={match.includes(currentPath)}>{icon}</MenuButton>
          </Link>
        );
      })}
    </StyledDrawer>
  );
};

export default Drawer;
