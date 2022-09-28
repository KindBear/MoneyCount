import React from "react";
import styled from "@emotion/styled";
import Tab from "@mui/material/Tab";

export const StyledTab = styled(Tab)({

color: "#fff",
height: "32px",
background: "#00463E",
margin: "8px 8px 8px 0px",
minHeight: "0px",
fontStyle: "normal",
fontWeight: "400",
fontSize: "16px",
lineHeight: "24px",
letterSpacing: "0.15px",

"&.Mui-selected": {
    color: "#fff",
  },

"&:focus": {
    background: "#00A390",
  },
});
