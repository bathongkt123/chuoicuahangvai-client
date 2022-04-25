import { React } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
export default function UnauthenticatedPage({ page }) {
  const [cookies] = useCookies([process.env.REACT_APP_COOKIE_NAME]);
  const isAuthenticated =
    process.env.REACT_APP_COOKIE_NAME in cookies &&
    cookies[process.env.REACT_APP_COOKIE_NAME] !== "undefined";
  if (!isAuthenticated) return page
  else {
    return <Navigate to='/' replace />
  }
}
