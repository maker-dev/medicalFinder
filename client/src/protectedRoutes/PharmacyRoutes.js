import React from 'react'
import { Outlet } from 'react-router-dom';
import { useAuth } from '../global/Auth.js';
import LoginPage from '../Pages/LoginPage.jsx';

function PharmacyRoutes() {
    const {userType} = useAuth();
    if (userType === null) {
        return <LoginPage />
    } else if (userType == "pharmacy") {
        return <Outlet />
    } else {
        return <HomePage />
    }
}

export default PharmacyRoutes;