import React from "react";
import "../styles/category.css"; // shared styles
import { Link } from "react-router-dom";


function Electronics({ addToCart }) {
const products = [
  {
    id: 27,
    name: "Laptop",
    price: 255,
    rating: 5,
    category: "Electronics",
    image: `${import.meta.env.BASE_URL}images/laptop.jpg`,
  },
  {
    id: 28,
    name: "PlayStation",
    price: 800,
    rating: 4,
    category: "Electronics",
    image: `${import.meta.env.BASE_URL}images/ps.jpg`,
  },
  {
    id: 29,
    name: "TV",
    price: 95,
    rating: 3,
    category: "Electronics",
    image: `${import.meta.env.BASE_URL}images/tv.jpg`,
  },
  {
    id: 30,
    name: "Headphones",
    price: 15,
    rating: 4,
    category: "Electronics",
    image: `${import.meta.env.BASE_URL}images/headphones.jpg`,
  },
];


  return (
    <div className="category-page">
      <h1>Electronics</h1>
      <p>Find the latest gadgets, phones, laptops, and more.</p>

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
                onClick={() => addToCart({ ...product, category: "Electronics" })}
              >
                Add to Cart
              </button>
              <Link to="/cart" className="view-cart">
                View Cart
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Electronics;
