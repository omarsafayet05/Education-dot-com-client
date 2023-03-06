import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="bg-gray-200 min-h-screen ">
        <h1 className="text-5xl text-blue-400 text-center">Loading...</h1>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return (
    <div className="min-h-screen bg-gray-200">
      <Navigate to="/login" state={{ from: location }} replace></Navigate>
    </div>
  );
};

export default PrivateRoute;
