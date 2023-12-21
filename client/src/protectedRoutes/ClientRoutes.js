import React from 'react'
import { Outlet } from 'react-router-dom';
import { useAuth } from '../global/Auth.js';
import LoginPage from '../Pages/LoginPage.jsx';

function ClientRoutes() {
    const {userType} = useAuth();
    return userType === "client" ? <Outlet /> : <LoginPage />
}

export default ClientRoutes;