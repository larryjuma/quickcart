import React from "react";
import "../styles/category.css";
import { Link } from "react-router-dom";

function Fashion({ addToCart }) {
const products = [
  {
    id: 23,
    name: "T-Shirt",
    price: 25,
    rating: 4,
    category: "Fashion",
    image: `${import.meta.env.BASE_URL}images/t-short.jpg`,
  },
  {
    id: 24,
    name: "Sneakers",
    price: 80,
    rating: 5,
    category: "Fashion",
    image: `${import.meta.env.BASE_URL}images/sneakers.jpg`,
  },
  {
    id: 25,
    name: "Jackets",
    price: 120,
    rating: 3,
    category: "Fashion",
    image: `${import.meta.env.BASE_URL}images/jacket.jpg`,
  },
  {
    id: 26,
    name: "Jeans",
    price: 40,
    rating: 4,
    category: "Fashion",
    image: `${import.meta.env.BASE_URL}images/jeans.jpg`,
  },
];

  return (
    <div className="category-page">
      <h1>Fashion</h1>
      <p>Trendy clothes, shoes, and accessories for all styles.</p>

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
                onClick={() => addToCart({ ...product, category: "Fashion" })}
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

export default Fashion;
