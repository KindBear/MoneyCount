import React from "react";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";

type MenuButtonProps = {
  active: boolean;
};

const MenuButton = styled(IconButton)(({active}: MenuButtonProps) => {

  return {
    width: "48px",
    height: "48px",
    borderRadius: "15px",
    background: active ? "#00A390" : "rgba(0, 0, 0, 0.3)",
    left: "8px",
    marginBottom: "14px",

    "&:hover": {
      cursor: "pointer",
    },

    "&:active": {
      backgroundColor: "#00A390",
      },

    "&:focus": {
      boxShadow: "none",
      background: "#00A390",
    },

    "& .MuiSvgIcon-root": {
      color: "#DEDEDE",
      fontSize: "30px",
    },
  };
});

export default MenuButton;
