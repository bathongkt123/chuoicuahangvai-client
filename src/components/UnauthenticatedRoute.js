import { React } from "react";
import { Navigate, Route } from "react-router-dom";
import { useCookies } from "react-cookie";

function UnauthenticatedRoute() {
  const [cookies, setCookie] = useCookies([process.env.REACT_APP_COOKIE_NAME]);
  const isAuthenticated =
    process.env.REACT_APP_COOKIE_NAME in cookies &&
    cookies[process.env.REACT_APP_COOKIE_NAME] !== "undefined";
  console.log(isAuthenticated);

}

export default UnauthenticatedRoute;
