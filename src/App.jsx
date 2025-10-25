import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./Pages/Home";
import Electronics from "./Pages/Electronics";
import Fashion from "./Pages/Fashion";
import Groceries from "./Pages/Groceries";
import Gaming from "./Pages/Gaming";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/CheckOut";
import SpecialOffers from "./Pages/SpecialOffers";

function App() {
  // Initialize cartItems from localStorage if available
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cartItems to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product to cart
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // Update quantity (for + and - buttons)
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <Router>
      <div>
        <Navbar cartItemCount={cartItems.length} />
        <div style={{ padding: "20px" }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h1>Welcome to QuickCart</h1>
                  <p>Your one-stop shop for everything!</p>
                  <Home addToCart={addToCart} />
                </>
              }
            />
            <Route
              path="/electronics"
              element={<Electronics addToCart={addToCart} />}
            />
            <Route
              path="/fashion"
              element={<Fashion addToCart={addToCart} />}
            />
            <Route
              path="/groceries"
              element={<Groceries addToCart={addToCart} />}
            />
            <Route path="/gaming" element={<Gaming addToCart={addToCart} />} />
            <Route path="/products" element={<Products addToCart={addToCart} />} />
            <Route path="/special-offers" element={<SpecialOffers addToCart={addToCart} />} />
            <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
