import React from 'react'
import { Outlet } from 'react-router-dom';
import { useAuth } from '../global/Auth.js';
import LoginPage from '../Pages/LoginPage.jsx';

function AdminRoutes() {
    const {userType} = useAuth();
    return userType === "admin" ? <Outlet /> : <LoginPage />
}

export default AdminRoutes;