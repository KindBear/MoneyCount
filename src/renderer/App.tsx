import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Drawer from "./components/Drawer";
import styled from "@emotion/styled";
import Header from "./components/Header";
import GeneralSettingsPage from "./pages/GeneralSettingsPage";
import CategoriesSettingsPage from "./pages/CategoriesSettingsPage";
import MainPage from "./pages/MainPage";
import TransactionsPage from "./pages/TransactionsPage";
import SettingsPage from "./pages/SettingsPage";
import AccountsPage from "./pages/AccountsPage";

// tslint:disable-next-line
const AppContainer = styled.div(({ theme }: any) => ({
  backgroundColor: theme.palette.background.default,
  width: "100vw",
  height: "100vh",
  overflow: "auto",
}));

const AppBody = styled.div({
  marginLeft: "64px",
  width: "calc(100vw - 80px)",
  height: "calc(100vh - 112px)",
  padding: "24px 8px",
});

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Drawer />
        <AppBody>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="transactions" element={<TransactionsPage />} />
            <Route path="accounts" element={<AccountsPage />} />
            <Route path="settings" element={<SettingsPage />}>
              <Route index element={<GeneralSettingsPage />} />
              <Route path="categories" element={<CategoriesSettingsPage />} />
            </Route>
          </Routes>
        </AppBody>
      </AppContainer>
    </Router>
  );
};

export default App;
