import React from "react";
import Header from './components/Header';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import MainPage from "./pages/MainPage";
import TransactionsPage from "./pages/TransactionsPage";
import SettingsPage from "./pages/SettingsPage";

const AppContainer = styled.div(({ theme }: any) => ({
  backgroundColor: theme.palette.primary.main,
}));

const App = () => {
    return (
        <Router>
            <AppContainer>
                <Header/>
                <NavBar/>
                <div>
                    <Routes>
                        <Route path="/MainPage" element={<MainPage/>}/>
                        <Route path="/TransactionsPage" element={<TransactionsPage/>}/>
                        <Route path="/SettingsPage" element={<SettingsPage/>}/>
                    </Routes>
                </div>
            </AppContainer>
        </Router>
    );
};

export default App;
