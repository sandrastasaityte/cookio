import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, size) => {
    const existing = cartItems.find(
      (i) => i._id === item._id && i.selectedSize === size
    );
    if (existing) {
      setCartItems(
        cartItems.map((i) =>
          i._id === item._id && i.selectedSize === size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, selectedSize: size, quantity: 1 }]);
    }
  };

  const removeFromCart = (id, size) => {
    setCartItems(cartItems.filter((i) => !(i._id === id && i.selectedSize === size)));
  };

  const updateQuantity = (id, size, qty) => {
    if (qty < 1) return;
    setCartItems(
      cartItems.map((i) =>
        i._id === id && i.selectedSize === size ? { ...i, quantity: qty } : i
      )
    );
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
