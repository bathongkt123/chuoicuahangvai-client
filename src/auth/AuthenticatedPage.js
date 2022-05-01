import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";

export default function AuthenticatedPage({ page }) {
  const { token } = useAuth();
  return token ? page : <Navigate to="/login" replace />;
}
