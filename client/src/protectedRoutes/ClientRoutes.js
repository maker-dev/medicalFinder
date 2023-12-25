import React from 'react'
import { Outlet } from 'react-router-dom';
import { useAuth } from '../global/Auth.js';
import LoginPage from '../Pages/LoginPage.jsx';
import HomePage from '../Pages/HomePage.jsx';

function ClientRoutes() {
    const {user} = useAuth();
    if (user === null) {
        return <LoginPage />
    } else if (user.type == "client") {
        return <Outlet />
    } else {
        return <HomePage />
    }
}

export default ClientRoutes;