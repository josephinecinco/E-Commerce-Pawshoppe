import React, { useState, useEffect } from "react";
import axios from "axios";
import CardPage from "../components/CardPages";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

const API_URL = "http://localhost:8082/api/products"; // Laravel backend URL

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  // Fetch products from backend
  useEffect(() => {
    axios.get(API_URL)
      .then((res) => {
        setProducts(res.data);
        setAllProducts(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = (query) => {
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filtered);
  };

  return (
    <div className="product-list-page">
      <SearchBar onSearch={handleSearch} />
      <CardPage products={products} />
      <Footer />
    </div>
  );
};

export default ProductList;
