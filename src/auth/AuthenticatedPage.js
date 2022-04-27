import { React } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useCookies } from "react-cookie";
import axios from "axios";

export default function AuthenticatedPage({ page }) {
  const { auth } = useAuth();
  const [cookies, setCookie] = useCookies([process.env.REACT_APP_COOKIE_NAME]);

  // if (auth.isAuthenticated) {
  //   axios.interceptors.request.use((config) => {
  //     const token = cookies[process.env.REACT_APP_COOKIE_NAME];
  //     config.headers.Authorization = `Bearer ${token}`;
  //     return config;
  //   });
  // }
  return auth.isAuthenticated ? page : <Navigate to="/login" replace />;
}
