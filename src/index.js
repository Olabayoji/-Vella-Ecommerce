import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import ProductInfo from "./pages/ProductInfo";
import { Provider } from "react-redux";
import { store } from "./store/store";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Homepage />} />
            <Route path="products" element={<ProductPage />}></Route>
            <Route path="products/:id" element={<ProductInfo />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="cart/checkout" element={<CheckoutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
