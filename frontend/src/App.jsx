import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Components/Home/Home.jsx";
import Menu from "./Components/Menu/Menu.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import AddressForm from "./Components/AddressForm/AddressForm.jsx";
import MyOrders from "./Components/MyOrders/MyOrders.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Rating from "./Components/Rating/Rating.jsx";
import Checkout from "./Components/Checkout/Checkout";



export default function App() {
  return (
    <Router>
      <Header />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Rating />
            

              
            </>
          }
        />
        <Route path="/menu" element={<Menu />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/address-form" element={<AddressForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/myorders" element={<MyOrders />} />
      </Routes>

      <Footer />
    </Router>
  );
}
