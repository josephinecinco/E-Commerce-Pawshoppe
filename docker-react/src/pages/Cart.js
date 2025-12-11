import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/Cart.css";

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const navigate = useNavigate();

  const SHIPPING_FEE = 40;


  const getPrice = (item) => Number(item.price) || 0;
  const calculateSubtotal = (item) => getPrice(item) * item.quantity;
  const subtotal = cart.reduce((sum, item) => sum + calculateSubtotal(item), 0);
  const total = subtotal + SHIPPING_FEE;

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      <p className="cart-items-count">{cart.length} item(s)</p>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Looks like you haven’t added anything yet.</p>
          <button className="continue-shopping" onClick={() => navigate("/products")}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="cart-item">
                      <img
                        src={item.image_full_url || "https://via.placeholder.com/150"}
                        alt={item.name}
                      />
                      <span className="cart-item-name">{item.name}</span>
                    </div>
                  </td>
                  <td className="cart-price">₱{getPrice(item).toFixed(2)}</td>
                  <td>
                    <div className="cart-quantity">
                      <button onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                  </td>
                  <td className="cart-total">₱{calculateSubtotal(item).toFixed(2)}</td>
                  <td className="cart-remove">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="trash-btn"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <p><span>Subtotal:</span><span>₱{subtotal.toFixed(2)}</span></p>
            <p><span>Shipping:</span><span>₱{SHIPPING_FEE.toFixed(2)}</span></p>
            <p className="total"><span>Total:</span><span>₱{total.toFixed(2)}</span></p>
          </div>

          <div className="cart-buttons">
            <button className="continue-shopping" onClick={() => navigate("/products")}>
              Continue Shopping
            </button>
            <button className="checkout-btn" onClick={() => navigate("/checkout")}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
