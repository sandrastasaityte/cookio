import React, { useState } from "react";
import { dummyProducts } from "../../assets/data";
import { useCart } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";

import "./Menu.css";

const categories = ["All", "Curry", "Rice", "Noodles", "Dessert", "Drink"];
const types = ["All", "Chicken", "Beef", "Vegetarian", "Vegan"];

const Menu = () => {
  const [sortOrder, setSortOrder] = useState("none");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const { addToCart, cartItems } = useCart();
  const navigate = useNavigate();

  const filteredItems = dummyProducts.filter(
    (item) =>
      (selectedCategory === "All" || item.category === selectedCategory) &&
      (selectedType === "All" || item.type === selectedType)
  );

  const sortedItems = [...filteredItems].sort((a, b) => {
    const priceA = Math.min(...Object.values(a.price));
    const priceB = Math.min(...Object.values(b.price));
    if (sortOrder === "low") return priceA - priceB;
    if (sortOrder === "high") return priceB - priceA;
    return 0;
  });

  const handleAddToCart = (item, size) => {
    addToCart(item, size);
  };

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="menu-container">
      <h1>Our Menu</h1>

      <div className="filters">
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select onChange={(e) => setSelectedType(e.target.value)}>
          {types.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="none">Sort by Price</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

      <div className="menu-grid">
        {sortedItems.map((item) => (
          <div key={item._id} className="menu-card">
            <div className="menu-image">
              <img src={item.images[0]} alt={item.title} />
            </div>
            <div className="menu-details">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="menu-meta">
                <span>{item.category}</span> | <span>{item.type}</span>
              </div>
              <div className="menu-sizes">
                {item.sizes.map((size) => (
                  <button
                    key={size}
                    className="add-btn"
                    onClick={() => handleAddToCart(item, size)}
                  >
                    {size} - £{item.price[size]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {cartItems.length > 0 && (
        <div className="checkout-button-container">
          <button className="checkout-btn" onClick={goToCheckout}>
            Proceed to Checkout ({cartItems.length} items)
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
