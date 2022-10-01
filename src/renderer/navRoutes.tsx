import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import ViewListSharpIcon from "@mui/icons-material/ViewListSharp";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MainPage from "./pages/MainPage";
import TransactionsPage from "./pages/TransactionsPage";
import SettingsPage from "./pages/SettingsPage";
import AccountsPage from "./pages/AccountsPage";

export const NAV_ROUTES = [
    {
    title: "General Info",
    icon: <HomeIcon />,
    to: "/",
    component: <MainPage/>,
    match: ["/"],
  },
  {
    title: "Transactions",
    icon: <ViewListSharpIcon />,
    to: "/transactions",
    component: <TransactionsPage/>,
    match: ["/transactions"],
  },
  {
    title: "Accounts",
    icon: <AccountBalanceWalletIcon />,
    to: "/accounts",
    component: <AccountsPage/>,
    match: ["/accounts"],
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    to: "/settings",
    component: <SettingsPage/>,
    match: ["/settings", "/settings/categories"],
  },
  ];

