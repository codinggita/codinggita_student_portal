import React from 'react'
import { useStore } from '../stores/store.js'
import { Navigate } from 'react-router-dom';



const ProtectedRoute = ({ children }) => {

    const { isAuthenticated } = useStore();

    return isAuthenticated ? children : <Navigate to="/login" />;

}

export default ProtectedRoute