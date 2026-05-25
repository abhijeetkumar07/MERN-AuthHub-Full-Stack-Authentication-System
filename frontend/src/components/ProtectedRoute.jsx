import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import SkeletonLoader from "./SkeletonLoader.jsx";

export default function ProtectedRoute() {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) return <SkeletonLoader fullScreen />;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}
