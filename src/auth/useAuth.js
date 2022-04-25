import { useCookies } from "react-cookie";

const useAuth = () => {
  const [cookies, setCookie, removeCookie] = useCookies([process.env.REACT_APP_COOKIE_NAME]);
  const isAuthenticated = Boolean(cookies[process.env.REACT_APP_COOKIE_NAME])
  const auth = {
    isAuthenticated: isAuthenticated,
    token: cookies[process.env.REACT_APP_COOKIE_NAME]
  }
  const setUserSession = (token) => {
    setCookie(process.env.REACT_APP_COOKIE_NAME, token, {
      path: "/",
      expires: new Date(Date.now() + 16 * 60 * 60 * 1000),
      secure: true,
      sameSite: "strict",
    });

  }
  const removeUserSession = () => {
    removeCookie(process.env.REACT_APP_COOKIE_NAME)
  }
  return { auth, setUserSession, removeUserSession };
};

export default useAuth;