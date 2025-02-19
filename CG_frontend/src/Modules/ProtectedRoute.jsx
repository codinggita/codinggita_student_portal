import React from 'react'
import { authStore } from '../Stores/store.js'
import { Navigate } from 'react-router-dom';



const ProtectedRoute = ({ children }) => {

    const { isAuthenticated } = authStore();

    return isAuthenticated ? children : <Navigate to="/login" />;

}

export default ProtectedRoute