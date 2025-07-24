import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("accessToken");

  return isAuthenticated ? <Navigate to="/" replace /> : children; 
  
  //children is The direct child you passed

  // replace means:
  // Don’t keep /login or /register in browser history.
  // If user hits back, they won't go back to login again.
};

export default PublicRoute;
