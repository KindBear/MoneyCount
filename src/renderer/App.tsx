import React from "react";
import Header from './components/Header';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MuiDrawer from './components/MuiDrawer';
import { Container } from '@mui/material';
import styled from '@emotion/styled';
import MainPage from "./pages/MainPage";
import TransactionsPage from "./pages/TransactionsPage";
import SettingsPage from "./pages/SettingsPage";

const AppContainer = styled.div(({theme}: any) => ({
    backgroundColor: theme.palette.primary.main,
  }))

const App = () => {
    return (
        <Router>
            <AppContainer>
            <MuiDrawer />
            <Container fixed>
              <Routes>
                <Route path="/MainPage" element={<MainPage/>}/>
                <Route path="/TransactionsPage" element={<TransactionsPage/>}/>
                <Route path="/SettingsPage" element={<SettingsPage/>}/>
              </Routes>
            </Container>
            </AppContainer>
        </Router>
    );
};

export default App;
