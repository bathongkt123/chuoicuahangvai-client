import { useCookies } from "react-cookie";
import axios from "axios";
const useAuth = () => {
  const [cookies, setCookie, removeCookie] = useCookies([process.env.REACT_APP_COOKIE_NAME]);
  const token = cookies[process.env.REACT_APP_COOKIE_NAME]
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

  const initializeSession = () => {
    console.log('initialize')
    delete axios.defaults.headers.common['Authorization'];
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    console.log('end initialize')

  }
  return { token, setUserSession, removeUserSession, initializeSession };
};

export default useAuth;