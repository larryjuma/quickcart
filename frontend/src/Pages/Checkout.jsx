import React, { useState } from "react";
import "../styles/checkout.css";

function Checkout({ cartItems }) {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    address: "",
    payment: "Credit Card",
  });

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    alert(`Thank you ${customer.name}! Your order of $${subtotal} has been placed.`);
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-container">
        {/* Customer Info */}
        <div className="customer-info">
          <h2>Customer Information</h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={customer.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={customer.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Shipping Address"
            value={customer.address}
            onChange={handleChange}
          />
          <select name="payment" value={customer.payment} onChange={handleChange}>
            <option value="Credit Card">Credit Card</option>
            <option value="Mobile Money">Mobile Money</option>
            <option value="PayPal">PayPal</option>
            <option value="Payoneer">Payoneer</option>
          </select>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <h2>Order Summary</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="summary-item">
              <p>{item.name} x {item.quantity}</p>
              <p>${item.price * item.quantity}</p>
            </div>
          ))}
          <hr />
          <h3>Subtotal: ${subtotal}</h3>
          <button className="place-order-btn" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
