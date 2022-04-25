import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MenuPage from "./pages/MenuPage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import AccountPage from "./pages/AccountPage";
import AccountOrderPage from "./pages/AccountOrderPage";
import AddressPage from "./pages/AccountAddressPage";
import PaymentPage from "./pages/PaymentPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import UnauthenticatedPage from "auth/UnauthenticatedPage";
import AuthenticatedPage from "auth/AuthenticatedPage";
import {
  DeliveryForm,
  ShipmentForm,
  PaymentForm,
} from "./pages/PaymentPage/LeftPanel";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { Fragment } from "react";
import useAuth from "auth/useAuth";
import axios from "axios";
function App() {
  const { auth } = useAuth();
  if (auth.token)
    axios.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${auth.token}`;
      return config;
    });
  return (
    <Router>
      <Routes>
        <Route path="payment" element={<PaymentPage />}>
          <Route index element={<DeliveryForm />} />
          <Route path="delivery" element={<DeliveryForm />} />
          <Route path="shipment" element={<ShipmentForm />} />
          <Route path="complete" element={<PaymentForm />} />
        </Route>

        <Route
          path="/"
          element={
            <Fragment>
              <Header />
              <Outlet />
              <Footer />
            </Fragment>
          }
        >
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={<UnauthenticatedPage page={<RegisterPage />} />}
          />
          <Route
            path="login"
            element={<UnauthenticatedPage page={<LoginPage />} />}
          />
          <Route path="forgotpassword" element={<ForgotPasswordPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="menu/:productId" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />

          <Route path="account">
            <Route
              index
              element={<AuthenticatedPage page={<AccountPage />} />}
            />
            <Route
              path="address"
              element={<AuthenticatedPage page={<AddressPage />} />}
            />
            <Route
              path="order/:orderId"
              element={<AuthenticatedPage page={<AccountOrderPage />} />}
            />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
