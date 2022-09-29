import React from "react";
import { styled } from "@mui/material/styles";
import { ButtonProps, IconButton } from "@mui/material";

type MenuButtonProps = {
  active: boolean;
} & ButtonProps;

const MenuButton = styled(IconButton)<MenuButtonProps>(({active, theme}) => {

  return {
    width: "48px",
    height: "48px",
    borderRadius: "15px",
    background: active ? theme.palette.primary.light : "rgba(0, 0, 0, 0.3)",
    left: "8px",
    marginBottom: "14px",

    "&:hover": {
      cursor: "pointer",
    },

    "&:active": {
      backgroundColor: theme.palette.primary.light,
    },

    "&:focus": {
      boxShadow: "none",
      background: theme.palette.primary.light,
    },

    "& .MuiSvgIcon-root": {
      color: theme.palette.common.white,
      fontSize: "30px",
    },
  };
});

export default MenuButton;
