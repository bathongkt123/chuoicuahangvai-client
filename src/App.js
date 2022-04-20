import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MenuPage from "./pages/MenuPage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import AccountPage from "./pages/AccountPage";
import AccountOrderPage from "pages/AccountOrderPage";
import AddressPage from "pages/AccountAddressPage";
import PaymentPage from "pages/PaymentPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import {
  DeliveryForm,
  ShipmentForm,
  PaymentForm,
} from "pages/PaymentPage/LeftPanel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="forgotpassword" element={<ForgotPasswordPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="account/address" element={<AddressPage />} />
          <Route path="payment" element={<PaymentPage />}>
            <Route path="delivery" element={<DeliveryForm />} />
            <Route path="shipment" element={<ShipmentForm />} />
            <Route path="paymentfinish" element={<PaymentForm />} />
          </Route>
          <Route
            path="/account/order/:orderId"
            element={<AccountOrderPage />}
          />
          <Route path="/menu/:productId" element={<ProductPage />} />
        </Routes>
      </Router>
      <Footer />
    </React.Fragment>
  );
}
export default App;
