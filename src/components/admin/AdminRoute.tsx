import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function AdminRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading, checkAuth } = useAuth();
  const location = useLocation();

  useEffect(() => {
    checkAuth();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (!user || user.role !== "admin") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
