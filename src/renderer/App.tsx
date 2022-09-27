import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Drawer from "./components/Drawer";
import styled from "@emotion/styled";
import Header from "./components/Header";
import { NAV_ITEMS } from "./navItems";

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
            <Header/>
            <Drawer />
              <AppBody>
                <Routes>
                  {NAV_ITEMS.map((item) => <Route path={item.path} element={item.component}/> )}
                </Routes>
              </AppBody>
          </AppContainer>
        </Router>
  );
};

export default App;
