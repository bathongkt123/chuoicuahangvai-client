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
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import UnauthenticatedPage from "auth/UnauthenticatedPage";
import AuthenticatedPage from "auth/AuthenticatedPage";
import PaymentInfo from "pages/PaymentInfo";
import PaymentComplete from "pages/PaymentComplete";
import ProtectedPayment from "auth/ProtectedPayment";
import PaymentDelivery from "pages/PaymentDelivery";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import useAuth from "auth/useAuth";

import { Fragment, useState } from "react";

function App() {
  const { initializeSession } = useAuth();
  initializeSession();

  return (
    <Router>
      <Routes>
        <Route path="payment" element={<ProtectedPayment />}>
          <Route index element={<PaymentInfo />} />
          <Route path="info" element={<PaymentInfo />} />
          <Route path="delivery" element={<PaymentDelivery />} />
          <Route path="complete" element={<PaymentComplete />} />
        </Route>

        <Route
          path=""
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
