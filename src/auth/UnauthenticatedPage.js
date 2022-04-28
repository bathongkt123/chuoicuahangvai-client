import { React } from "react";
import useAuth from './useAuth'
import { Navigate } from "react-router-dom";
export default function UnauthenticatedPage({ page }) {
  const { token } = useAuth()
  if (!token) return page
  else {
    return <Navigate to='/' replace />
  }
}
