import React, { useEffect } from "react";
import Header from './components/Header';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import TransactionsPage from "./pages/TransactionsPage";
import SettingsPage from "./pages/SettingsPage";
import MainPage from "./pages/MainPage";

const AppContainer = styled.div(({theme}: any) => ({
    backgroundColor: theme.palette.primary.main,
}));

const App = () => {
    useEffect(() => {
        window.electron.ipcRenderer.invoke("categories/get").then(result => {
            console.log(result);
        });
    }, [])

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
