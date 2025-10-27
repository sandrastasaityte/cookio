import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./NewArrivals.css";

// Import local images
import product1 from "../../assets/product_1.png";
import product2 from "../../assets/product_2.png";
import product3 from "../../assets/product_3.png";
import product4 from "../../assets/product_4.png";
import product5 from "../../assets/product_5.png";

const products = [
  { id: 1, name: "Spicy Chicken Curry", price: "£8.99", image: product1 },
  { id: 2, name: "Vegetable Fried Rice", price: "£6.49", image: product2 },
  { id: 3, name: "Beef Noodles", price: "£7.99", image: product3 },
  { id: 4, name: "Sweet & Sour Prawns", price: "£9.49", image: product4 },
  { id: 5, name: "Tofu Stir Fry", price: "£7.29", image: product5 },
];

const NewArrivals = () => {
  return (
    <section className="new-arrivals">
      <h2 className="title">✨ New Arrivals ✨</h2>
      <p className="subtitle">
        Discover our newest dishes — fresh, flavorful, and made to impress!
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-card">
              <div className="image-wrapper">
                <img src={product.image} alt={product.name} />
                <div className="overlay">
                  <button className="shop-btn">Shop Now</button>
                </div>
              </div>
              <div className="product-info">
                <h4>{product.name}</h4>
                <p className="price">{product.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NewArrivals;
