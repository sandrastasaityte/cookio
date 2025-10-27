import React, { useRef } from "react";
import "./PopularFood.css";

import food1 from "../../assets/product_1.png";
import food2 from "../../assets/product_2.png";
import food3 from "../../assets/product_3.png";
import food4 from "../../assets/product_4.png";
import food5 from "../../assets/product_5.png";

const popularFoods = [
  { id: 1, name: "Spicy Chicken Curry", price: "£8.99", image: food1 },
  { id: 2, name: "Vegetable Fried Rice", price: "£6.49", image: food2 },
  { id: 3, name: "Beef Noodles", price: "£7.99", image: food3 },
  { id: 4, name: "Shrimp Pad Thai", price: "£9.49", image: food4 },
  { id: 5, name: "Chicken Satay Skewers", price: "£7.49", image: food5 },
];

const PopularFood = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <section className="popular-food">
      <h2 className="section-title">🔥 Popular Food</h2>
      <p className="section-subtitle">
        Check out our most loved dishes, tried and tested by our happy customers!
      </p>

      <div className="slider-container">
        <button className="arrow left" onClick={scrollLeft}>
          &#10094;
        </button>

        <div className="food-slider" ref={sliderRef}>
          {popularFoods.map((food) => (
            <div key={food.id} className="food-card">
              <img src={food.image} alt={food.name} />
              <h4>{food.name}</h4>
              <p className="price">{food.price}</p>
              <button className="order-btn">Order Now</button>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={scrollRight}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default PopularFood;
