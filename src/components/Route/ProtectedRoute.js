import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

export const ProtectedRoute = ({ isAdmin, element: Element, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector(
    (state) => state.userLogin
  );
  return (
    <>
      {user.role === "admin" ? (
        <Navigate to="/dashboard" />
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};
