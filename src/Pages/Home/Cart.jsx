import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 50.0,
      qty: 2,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 30.0,
      qty: 1,
    },
    // Add more items as needed
  ]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.qty * item.price, 0).toFixed(2);
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>Qty: {item.qty}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div>
            <h2>Total Price: ${getTotalPrice()}</h2>
            <button>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
