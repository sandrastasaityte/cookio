import React from "react";
import { useCart } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  // Calculate total price
  const calculateTotal = () =>
    cartItems.reduce(
      (total, item) => total + item.price[item.selectedSize] * item.quantity,
      0
    );

  // Place order handler
  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("Order placed successfully!");
    clearCart();
    navigate("/");
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-container">
        <h2>Your cart is empty</h2>
        <button onClick={() => navigate("/menu")}>Go Back to Menu</button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-items">
        {cartItems.map((item, index) => (
          <div key={index} className="checkout-item">
            <img src={item.images[0]} alt={item.title} />
            <div className="item-info">
              <h3>{item.title}</h3>
              <p>Size: {item.selectedSize}</p>
              <p>Price: £{item.price[item.selectedSize]}</p>
              <div className="quantity-controls">
                <button
                  onClick={() =>
                    updateQuantity(item._id, item.selectedSize, item.quantity - 1)
                  }
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    updateQuantity(item._id, item.selectedSize, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item._id, item.selectedSize)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="checkout-summary">
        <h3>Total: £{calculateTotal().toFixed(2)}</h3>
        <button className="place-order-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
