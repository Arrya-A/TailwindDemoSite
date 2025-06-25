import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const isAuthenticated = !!localStorage.getItem("accessToken");
  const location = useLocation();

  return isAuthenticated ? (
    <Outlet /> // means Render the child routes nested under this route
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
