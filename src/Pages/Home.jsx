import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/home.css";

function Home({ addToCart }) {
  const navigate = useNavigate();

  // Featured products data
const featuredProducts = [
  {
    id: 101,
    name: "Wireless Headphones",
    price: 59.99,
    image: `${import.meta.env.BASE_URL}images/headphones.jpg`,
  },
  {
    id: 102,
    name: "Smartphone",
    price: 499.99,
    image: `${import.meta.env.BASE_URL}images/smartphone.jpg`,
  },
  {
    id: 103,
    name: "Sports Shoes",
    price: 89.99,
    image: `${import.meta.env.BASE_URL}images/sports-shoes.jpg`,
  },
];

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart"); 
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Shop Smarter with QuickCart</h1>
          <p>Discover the best deals on electronics, fashion, groceries, and more...</p>
            <button className="hero-btn" onClick={() => navigate("/products")}>
          Start Shopping
        </button>
        </div>
<div className="hero-img">
  <img
    src={`${import.meta.env.BASE_URL}images/hero.jpg`}
    alt="Shopping"
  />
</div>

      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <Link to="/electronics" className="category-card">Electronics</Link>
          <Link to="/fashion" className="category-card">Fashion</Link>
          <Link to="/groceries" className="category-card">Groceries</Link>
          <Link to="/gaming" className="category-card">Gaming</Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

    {/* Special Offers */}
<section className="offers">
  <h2>Special Offers</h2>
  <div className="offer-banner">
    <p>🔥 50% Off Electronics – Limited Time Only!</p>
    {/* ✅ Link directly to your SpecialOffers page */}
    <Link to="/special-offers" className="offer-btn">
      Shop Now
    </Link>
  </div>
</section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"QuickCart made my shopping so easy. Fast delivery too!"</p>
            <h4>- Sarah M.</h4>
          </div>
          <div className="testimonial-card">
            <p>"Best prices online. I always find great deals here."</p>
            <h4>- James K.</h4>
          </div>
          <div className="testimonial-card">
            <p>"I love the variety of products. Definitely recommend."</p>
            <h4>- Anita W.</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
