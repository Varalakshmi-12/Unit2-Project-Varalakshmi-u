import React, { useState } from "react";
import { mockItems} from "../testdata/mockData";
import CartItem from "../components/CartItem";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import "./CartPage.css";


export default function CartPage() {
  const [itemInput, setItemInput] = useState("");
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");


  // Adding item by name or ID
  const addItem = () => {
    if (!itemInput.trim()) return;

    const userInput = itemInput.toLowerCase();

    const found =
      mockItems.find(
        (item) =>
          item.name.toLowerCase() === userInput ||
          item.id.toString() === userInput
      );

    if (!found) {
      setMessage("❌ Invalid item entered");
      return;
    }

    
    const exists = cart.find((item) => item.id === found.id);

    if (exists) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === found.id ? { ...item, quantity: item.quantity + 1 }: item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...found, quantity: 1 }]);
    }

    setMessage("");
    setItemInput("");
  };


  const handlePayment = () => {
    if (cart.length === 0) {
      setMessage("🛒Cart is empty!");
      return;
    }
    
    setMessage("processing.....");
    
    setTimeout(() => {
      setMessage("✅ Payment successful! Your change due is $0.00.");
      setCart([]); 
      
    }, 2000);
    
  };

  
  const updateQuantity = (id, value) => {
    const qty = parseInt(value);
    if (qty < 1 || isNaN(qty)) return;

    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

   
  const deleteItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.08;
  const total = subtotal + tax;


return (
    <section>
      <div className="cart-container">
    

      <h1>Customer Cart Checkout</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter item name or ID"
          value={itemInput}
          onChange={(e) => setItemInput(e.target.value)}
        />

        <Button label="Add Item" onClick={addItem} />
        
        
      </div>
      {message && <p className="message">{message}</p>}
      <CartItem
        cart={cart}
        updateQuantity={updateQuantity}
        deleteItem={deleteItem}
      />

      <div className="totals">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Tax (8%): ${tax.toFixed(2)}</p>
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>

      <Button label="Pay Now" onClick={handlePayment} />
      </div>

      <nav className="nav-home">
      <Link to="/">Go Back to Home</Link>
      </nav>
      </section>
);
}