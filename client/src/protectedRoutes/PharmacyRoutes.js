import React from 'react'
import { Outlet } from 'react-router-dom';
import { useAuth } from '../global/Auth.js';
import LoginPage from '../Pages/LoginPage.jsx';
import HomePage from '../Pages/HomePage.jsx';

function PharmacyRoutes() {
    const {user} = useAuth();
    if (user === null) {
        return <LoginPage />
    } else if (user.type == "pharmacy") {
        return <Outlet />
    } else {
        return <HomePage />
    }
}

export default PharmacyRoutes;