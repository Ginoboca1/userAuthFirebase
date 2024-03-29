import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";

export const ProtectedRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <h1>Loading</h1>;

  if (!user) return <Navigate to="/home" />;

  return <>{children}</>;
}

