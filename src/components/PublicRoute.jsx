import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("accessToken");

  return isAuthenticated ? <Navigate to="/" replace /> : children;  //children is The direct child you passed
};

export default PublicRoute;
