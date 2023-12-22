import React from 'react'
import { Outlet } from 'react-router-dom';
import { useAuth } from '../global/Auth.js';
import HomePage from '../Pages/HomePage.jsx';

function ClientRoutes() {
    const {userType} = useAuth();
    return userType === null ? <Outlet /> : <HomePage />
}

export default ClientRoutes;