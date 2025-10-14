import React, { useState, useEffect } from "react";
import "../styles/specialOffers.css";

const specialOffers = [
  {
    id: 1,
    name: "Wireless Earbuds",
    oldPrice: 5000,
    price: 3500,
    image: "/QuickCart/images/ear-buds.jpg",
  },
  {
    id: 2,
    name: "Smartphone",
    oldPrice: 25000,
    price: 19999,
    image: "/QuickCart/images/smartphone.jpg",
  },
  {
    id: 3,
    name: "Smartwatch",
    oldPrice: 8000,
    price: 5999,
    image: "/QuickCart/images/smart-watch.jpg",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    oldPrice: 6000,
    price: 4499,
    image: "/QuickCart/images/speaker.jpg",
  },
  {
    id: 5,
    name: "Washing Machine",
    oldPrice: 45000,
    price: 37999,
    image: "/QuickCart/images/washing-machine.jpg",
  },
  {
    id: 6,
    name: "Coffee Maker",
    oldPrice: 7000,
    price: 5499,
    image: "/QuickCart/images/coffee.jpg",
  },
  {
    id: 7,
    name: "Sneakers",
    oldPrice: 4500,
    price: 3299,
    image: "/QuickCart/images/sneakers.jpg",
  },
  {
    id: 8,
    name: "Sunglasses",
    oldPrice: 3000,
    price: 1999,
    image: "/QuickCart/images/glasses.jpg",
  },
];

export default function SpecialOffers({ addToCart }) {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour countdown in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Convert seconds → HH:MM:SS
  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="special-offers">
      <h2>🔥 Special Offers</h2>

      {/* Countdown Section */}
      <div className="countdown-banner">
        <p>Hurry! Offer ends in: <span>{formatTime(timeLeft)}</span></p>
      </div>

      <div className="offers-grid">
        {specialOffers.map((item) => (
          <div key={item.id} className="offer-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>
              <span className="old-price">Ksh {item.oldPrice}</span>{" "}
              <span className="new-price">Ksh {item.price}</span>
            </p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
