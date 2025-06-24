import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("accessToken");

  return isAuthenticated ? <Navigate to="/" replace /> : children;
};

export default PublicRoute;
