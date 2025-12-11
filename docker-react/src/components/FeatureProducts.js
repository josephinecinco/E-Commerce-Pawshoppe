import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/featureProducts.css";

const API_URL = "http://localhost:8082/api/products"; // Your Laravel API

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch featured products from backend
    axios.get(API_URL)
      .then(res => {
        setProducts(res.data.slice(0, 3)); // Take first 3 as featured
      })
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  const handleViewMore = () => {
    navigate("/products");
  };

  return (
    <section className="featured-products">
      <div className="horizontal-scroll">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image_full_url || "https://via.placeholder.com/150"} 
              alt={product.name || "Product Image"}
              className="product-img"
            />
            <h4>{product.name || "No Name"}</h4>
            <p className="description">{product.description || "No description"}</p>
            <p className="price">₱{parseFloat(product.price || 0).toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div className="view-more">
        <button className="view-more-btn" onClick={handleViewMore}>
          View More Products
        </button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
