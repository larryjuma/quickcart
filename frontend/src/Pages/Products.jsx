import React from "react";
import "../styles/products.css"; // dedicated styles
import { Link } from "react-router-dom";

function Products({ addToCart }) {
  const products = [
    // Appliances
    { id: 1, name: "Washing Machine", price: 350, rating: 4, category: "Appliances", image: "/QuickCart/images/washing-machine.jpg" },
    { id: 2, name: "Refrigerator", price: 500, rating: 5, category: "Appliances", image: "/QuickCart/images/fridge.jpg" },
    { id: 3, name: "Microwave", price: 120, rating: 4, category: "Appliances", image: "/QuickCart/images/microwave.jpg" },
    { id: 4, name: "Air Conditioner", price: 600, rating: 5, category: "Appliances", image: "/QuickCart/images/air-conditioner.jpg" },
    { id: 5, name: "Lyons LST3211W 32 inch HD Frameless Android Smart TV", price: 400, rating: 5, category: "Appliances", image: "/QuickCart/images/tv.jpg" },
    { id: 6, name: "Double Burner Gas Cooker", price: 50, rating: 4, category: "Appliances", image: "/QuickCart/images/burner.jpg" },

    // Kitchen
    { id: 7, name: "Blender", price: 50, rating: 4, category: "Kitchen", image: "/QuickCart/images/blender.jpg" },
    { id: 8, name: "Cookware Set", price: 120, rating: 5, category: "Kitchen", image: "/QuickCart/images/cookware.jpg" },
    { id: 9, name: "Coffee Maker", price: 90, rating: 3, category: "Kitchen", image: "/QuickCart/images/coffee.jpg" },
    { id: 10, name: "Toaster", price: 40, rating: 4, category: "Kitchen", image: "/QuickCart/images/toaster.jpg" },

    // Health & Beauty
    { id: 11, name: "Hair Dryer", price: 35, rating: 4, category: "Health & Beauty", image: "/QuickCart/images/hair-dryer.jpg" },
    { id: 12, name: "Skincare Kit", price: 80, rating: 5, category: "Health & Beauty", image: "/QuickCart/images/skin-care-kit.jpg" },
    { id: 13, name: "Perfume", price: 60, rating: 3, category: "Health & Beauty", image: "/QuickCart/images/perfume.jpg" },
    { id: 14, name: "Massage Gun", price: 150, rating: 5, category: "Health & Beauty", image: "/QuickCart/images/massage-gun.jpg" },

    // Accessories
    { id: 15, name: "Wrist Watch", price: 150, rating: 5, category: "Accessories", image: "/QuickCart/images/watch.jpg" },
    { id: 16, name: "Sunglasses", price: 80, rating: 4, category: "Accessories", image: "/QuickCart/images/glasses.jpg" },
    { id: 17, name: "Backpack", price: 60, rating: 3, category: "Accessories", image: "/QuickCart/images/backpack.jpg" },
    { id: 18, name: "Wallet", price: 40, rating: 4, category: "Accessories", image: "/QuickCart/images/wallet.jpg" },

    // Electronics
    { id: 19, name: "Smartphone", price: 700, rating: 5, category: "Electronics", image: "/QuickCart/images/smartphone.jpg" },
    { id: 20, name: "Laptop", price: 1200, rating: 4, category: "Electronics", image: "/QuickCart/images/laptop.jpg" },
    { id: 21, name: "Headphones", price: 150, rating: 3, category: "Electronics", image: "/QuickCart/images/headphones.jpg" },
    { id: 22, name: "Smartwatch", price: 250, rating: 5, category: "Electronics", image: "/QuickCart/images/smart-watch.jpg" },

    // Fashion
    { id: 23, name: "T-Shirt", price: 25, rating: 4, category: "Fashion", image: "/QuickCart/images/t-short.jpg" },
    { id: 24, name: "Sneakers", price: 80, rating: 5, category: "Fashion", image: "/QuickCart/images/sneakers.jpg" },
    { id: 25, name: "Jackets", price: 120, rating: 3, category: "Fashion", image: "/QuickCart/images/jacket.jpg" },
    { id: 26, name: "Jeans", price: 40, rating: 4, category: "Fashion", image: "/QuickCart/images/jeans.jpg" },

    // Groceries
    { id: 27, name: "Fruits", price: 15, rating: 5, category: "Groceries", image: "/QuickCart/images/fruits.jpg" },
    { id: 28, name: "Vegetables", price: 12, rating: 4, category: "Groceries", image: "/QuickCart/images/vegetable.jpg" },
    { id: 29, name: "Snacks", price: 8, rating: 3, category: "Groceries", image: "/QuickCart/images/snacks.jpg" },
    { id: 30, name: "Drinks", price: 10, rating: 4, category: "Groceries", image: "/QuickCart/images/drinks.jpg" },

    // Gaming
    { id: 31, name: "PlayStation", price: 500, rating: 5, category: "Gaming", image: "/QuickCart/images/ps.jpg" },
    { id: 32, name: "Xbox", price: 450, rating: 4, category: "Gaming", image: "/QuickCart/images/xbox.jpg" },
    { id: 33, name: "Gaming Keyboard", price: 60, rating: 3, category: "Gaming", image: "/QuickCart/images/gaming-keyboard.jpg" },
    { id: 34, name: "Gaming Chair", price: 200, rating: 4, category: "Gaming", image: "/QuickCart/images/chair.jpg" },
  ];

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="products-page">
      <h1>All Products</h1>
      <p>Browse through our wide range of categories and items.</p>

      {categories.map((category) => (
        <section key={category} className="product-section">
          <h2>{category}</h2>
          <div className="product-grid">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
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
                    <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
                    <Link to="/cart" className="view-cart">View Cart</Link>
                  </div>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Products;
