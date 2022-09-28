import React from "react";
import { Link, useLocation } from "react-router-dom";
import { StyledDrawer } from "./StyleMui/StyledDrawer";
import MenuButton from "./StyleMui/MenuButton";
import { NAV_ITEMS } from "../navItems";

const Drawer = () => {
  const location = useLocation();

  return (
    <StyledDrawer variant="permanent">
      {NAV_ITEMS.map((item) => {
        const { title, icon, path } = item;
        return (
          <Link
            key={title}
            to={path}
          >
            <MenuButton active={path === location.pathname}>
              {icon}
            </MenuButton>
          </Link>
        );
      })}
    </StyledDrawer>
  );
};

export default Drawer;
