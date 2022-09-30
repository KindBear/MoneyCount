import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import ViewListSharpIcon from "@mui/icons-material/ViewListSharp";
import HomeIcon from "@mui/icons-material/Home";
import MainPage from "./pages/MainPage";
import TransactionsPage from "./pages/TransactionsPage";
import SettingsPage from "./pages/SettingsPage";

export const NAV_ROUTES = [
    {
    title: 'General Info',
    icon: <HomeIcon />,
    to: '/',
    component: <MainPage/>,
    match: ['/'],
  },
  {
    title: "Transactions",
    icon: <ViewListSharpIcon />,
    to: '/transactions',
    component: <TransactionsPage/>,
    match: ['/transactions'],
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    to: '/settings',
    component: <SettingsPage/>,
    match: ['/settings', '/settings/categories'],
  }
  ];
  
