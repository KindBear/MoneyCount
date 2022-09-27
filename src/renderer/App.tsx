import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Drawer from './components/Drawer';
import styled from '@emotion/styled';
import Header from "./components/Header";
import { NAV_ITEMS } from "./navItems";

const AppContainer = styled.div(({theme}: any) => ({
    backgroundColor: theme.palette.primary.main,
    width: '100vw',
    height: '100vh',
    overflow: 'auto',
  }));

const AppBody = styled.div(({theme}: any) => ({
    marginLeft: '64px',
    width: 'calc(100vw - 64px)',
    height: 'calc(100vh - 64px)',
   }));

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
