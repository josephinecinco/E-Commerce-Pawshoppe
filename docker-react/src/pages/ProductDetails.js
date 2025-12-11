import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";
import "../styles/ProductDetails.css";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

const API_URL = "http://localhost:8082/api/products";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);

  // Fetch product by ID
  useEffect(() => {
    axios.get(`${API_URL}/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  // Fetch related products
  useEffect(() => {
    if (!product) return;

    axios.get(API_URL)
      .then(res => {
        const related = res.data
          .filter(p => p.category === product.category && p.id !== product.id)
          .slice(0, 4);
        setRelatedProducts(related);
      })
      .catch(err => console.error(err));
  }, [product]);

  if (!product) return <p>Loading product...</p>;

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const handleBuyNow = () => {
    alert(`Buying ${quantity} of ${product.name}`);
  };

  return (
    <div className="page-wrapper">
      <SearchBar />

      <div className="product-detail-container">
        <div className="product-image-container">
          <img
            src={product.image_full_url || "https://via.placeholder.com/200"}
            alt={product.name}
            className="product-image"
          />
        </div>

        <div className="product-info">
          <p className="product-category">{product.category}</p>
          <h2 className="product-name">{product.name}</h2>
          <hr />
          <p className="product-description">{product.description || "No description available."}</p>
          <p className="product-price">₱{parseFloat(product.price || 0).toFixed(2)}</p>

          <div className="quantity-container">
            <span>Quantity:</span>
            <div className="quantity-controls">
              <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <div className="action-buttons">
            <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
            <button className="add-cart" onClick={handleAddToCart}>Add to cart</button>
          </div>

          <Link to="/products" className="back-link">← Back</Link>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="related-products-section">
          <h3>Related Products</h3>
          <div className="related-products-grid">
            {relatedProducts.map(item => (
              <div key={item.id} className="related-card">
                <img
                  src={item.image_full_url || "https://via.placeholder.com/50"}
                  alt={item.name}
                />
                <p className="related-name">{item.name}</p>
                <p className="related-price">₱{parseFloat(item.price || 0).toFixed(2)}</p>
                <Link to={`/products/${item.id}`} className="info-btn">View Details</Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {showNotification && (
        <div className="notification-toast">
          {product.name} added to cart!
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetails;
  