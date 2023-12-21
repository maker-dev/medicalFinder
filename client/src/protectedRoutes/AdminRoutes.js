import React from 'react'
import { Outlet } from 'react-router-dom';
import { useAuth } from '../global/Auth.js';
import LoginPage from '../Pages/LoginPage.jsx';
import HomePage from '../Pages/HomePage.jsx';

function AdminRoutes() {
    const {userType} = useAuth();
    if (userType === null) {
        return <LoginPage />
    } else if (userType == "admin") {
        return <Outlet />
    } else {
        return <HomePage />
    }
}

export default AdminRoutes;