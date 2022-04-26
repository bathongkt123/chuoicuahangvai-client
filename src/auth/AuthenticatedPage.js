import { React } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";

export default function AuthenticatedPage({ page }) {
  const { auth } = useAuth();

  // if (isAuthenticated) {
  //   axios.interceptors.request.use((config) => {
  //     const token = cookies[process.env.REACT_APP_COOKIE_NAME];
  //     config.headers.Authorization = `Bearer ${token}`;
  //     return config;
  //   });
  // }
  return auth.isAuthenticated ? page : <Navigate to="/login" replace />;
}
