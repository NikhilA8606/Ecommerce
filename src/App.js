import React, { useState, useEffect } from "react";
import { Products, Navbar, Cart } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      if (data && Array.isArray(data.products)) {
        setProducts(data.products);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.log("Error found", error);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProducts();

  }, []);

  return (
    <Router>
      <Navbar totalItems={cart} />
      <Routes>
        <Route
          path="/"
          element={
            <Products products={products} cart={cart} setCart={setCart} />
          }
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        
      </Routes>
    </Router>
  );
};

export default App;
