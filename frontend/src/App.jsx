import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import LoginPopup from "./Components/LoginPopup/LoginPopup.jsx";
import Verify from "./Pages/Verify/Verify.jsx";
import MyOrders from "./Pages/MyOrders/MyOrders.jsx";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/PlaceOrder" element={<PlaceOrder />} />
          <Route path="/Verify" element={<Verify />} />
          <Route path="/MyOrders" element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
