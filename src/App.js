
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MenuPage from "./pages/MenuPage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage"
import AccountPage from "./pages/AccountPage"
import AccountOrderPage from "pages/AccountOrderPage";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/account/:orderId" element={<AccountOrderPage />} />
          <Route path="/menu/:productId" element={<ProductPage />} />
        </Routes>
      </Router>
      <Footer />
    </React.Fragment>
  );
}
export default App;
