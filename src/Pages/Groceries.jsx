import React from "react";
import "../styles/category.css";
import { Link } from "react-router-dom";

function Groceries({ addToCart }) {
const products = [
  {
    id: 27,
    name: "Fruits",
    price: 15,
    rating: 5,
    category: "Groceries",
    image: `${import.meta.env.BASE_URL}images/fruits.jpg`,
  },
  {
    id: 28,
    name: "Vegetables",
    price: 12,
    rating: 4,
    category: "Groceries",
    image: `${import.meta.env.BASE_URL}images/vegetable.jpg`,
  },
  {
    id: 29,
    name: "Snacks",
    price: 8,
    rating: 3,
    category: "Groceries",
    image: `${import.meta.env.BASE_URL}images/snacks.jpg`,
  },
  {
    id: 30,
    name: "Drinks",
    price: 10,
    rating: 4,
    category: "Groceries",
    image: `${import.meta.env.BASE_URL}images/drinks.jpg`,
  },
];



  return (
    <div className="category-page">
      <h1>Groceries</h1>
      <p>Fresh produce, snacks, and everyday essentials.</p>

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
                onClick={() => addToCart({ ...product, category: "Groceries" })}
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

export default Groceries;
