import React from "react";
import { useCart } from "../../Context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2>Your Cart is Empty</h2>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul className="cart-items">
        {cartItems.map((item, index) => (
          <li key={`${item._id}-${item.size}-${index}`} className="cart-item">
            <img src={item.images[0]} alt={item.title} />
            <div className="cart-info">
              <h3>{item.title}</h3>
              <p>Size: {item.size}</p>
              <p>Price: £{item.priceSelected}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item._id, item.size)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-footer">
        <p>Total: £{totalPrice.toFixed(2)}</p>
        <button onClick={clearCart}>Clear Cart</button>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
