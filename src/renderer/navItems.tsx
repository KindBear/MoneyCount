import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import ViewListSharpIcon from "@mui/icons-material/ViewListSharp";
import HomeIcon from "@mui/icons-material/Home";
import MainPage from "./pages/MainPage";
import TransactionsPage from "./pages/TransactionsPage";
import SettingsPage from "./pages/SettingsPage";

export const NAV_ITEMS = [
  {
    title: "General Info",
    icon: <HomeIcon />,
    path: "/",
    component: <MainPage/>,
  },
  {
    title: "Transactions",
    icon: <ViewListSharpIcon />,
    path: "/transactions",
    component: <TransactionsPage/>,
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    path: "/settings",
    component: <SettingsPage/>,
  },
];
