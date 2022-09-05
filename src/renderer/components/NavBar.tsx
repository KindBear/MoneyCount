import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <div>
            <NavLink to="/TransactionsPage"> Transactions</NavLink>
        </div>
        <div>
            <NavLink to="/MainPage">Main Page</NavLink>
        </div> 
        <div>
            <NavLink to="/SettingsPage">Settings</NavLink>
        </div> 
        </nav>
       
    );
};

export default NavBar;
