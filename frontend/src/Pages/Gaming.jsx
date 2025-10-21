import React from "react";
import "../styles/category.css";
import { Link } from "react-router-dom";

function Gaming({ addToCart }) {
const products = [
  { id: 31, name: "PlayStation", price: 500, rating: 5, category: "Gaming", image: `${import.meta.env.BASE_URL}images/ps.jpg` },
  { id: 32, name: "Xbox", price: 450, rating: 4, category: "Gaming", image: `${import.meta.env.BASE_URL}images/xbox.jpg` },
  { id: 33, name: "Gaming Keyboard", price: 60, rating: 3, category: "Gaming", image: `${import.meta.env.BASE_URL}images/gaming-keyboard.jpg` },
  { id: 34, name: "Gaming Chair", price: 200, rating: 4, category: "Gaming", image: `${import.meta.env.BASE_URL}images/chair.jpg` },
];


  return (
    <div className="category-page">
      <h1>Gaming</h1>
      <p>Consoles, games, and gear for serious gamers.</p>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
             <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div className="price-rating">
              <p className="price">${product.price}</p>
              <p className="rating">
                {"⭐".repeat(product.rating) + "☆".repeat(5 - product.rating)}
              </p>
            </div>
            <div className="product-actions">
              <button
                className="add-to-cart"
                onClick={() => addToCart({ ...product, category: "Gaming" })}
              >
                Add to Cart
              </button>
              <Link to="/cart" className="view-cart">View Cart</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gaming;
