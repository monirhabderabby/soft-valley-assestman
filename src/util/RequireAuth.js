import React from "react";
import { Navigate, useLocation } from "react-router";

const RequireAuth = ({ children }) => {
    const token = localStorage.getItem("SVToken");
    let location = useLocation();

    if (token) {
        return children;
    } else {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
};

export default RequireAuth;
