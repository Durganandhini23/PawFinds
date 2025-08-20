import React, { useState } from "react";
import "../css/cart.css";

function Cart() {
  const [cart, setCart] = useState([
    { id: 1, name: "Golden Retriever", price: 5000, qty: 1 },
    { id: 2, name: "Persian Cat", price: 3000, qty: 2 },
  ]);

  const increment = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item));
  };

  const decrement = (id) => {
    setCart(cart.map(item => item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item));
  };

  const remove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div>
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
              </div>
              <div className="cart-actions">
                <button className="qty-btn" onClick={() => decrement(item.id)}>-</button>
                <span>{item.qty}</span>
                <button className="qty-btn" onClick={() => increment(item.id)}>+</button>
                <button className="btn-remove" onClick={() => remove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h2 className="cart-total">Total: ₹{total}</h2>
          <center><button className="checkout-btn">Proceed to Checkout</button></center>
        </div>
      )}
    </div>
  );
}

export default Cart;
