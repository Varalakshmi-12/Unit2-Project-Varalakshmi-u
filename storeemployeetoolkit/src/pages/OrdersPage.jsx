import { useEffect, useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import "./OrdersPage.css";
import { getOrders , getOrdersByPhone } from "../services/api"; 

export default function OrdersPage() {
    const [orders, setOrders] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        getOrders()
            .then(data => setOrders(data))
            .catch(err => setError("Failed to load orders: " + err.message));
    }, []);

    // Search orders by phone number
    const handleSearch =  () => {
        if (!phoneNumber.trim()) {
            setError("Please enter a phone number");
            return;
        }
        getOrdersByPhone(phoneNumber)
            .then(data => setOrders(data))
            .catch(err => setError("Failed to load orders: " + err.message));
            console.log("Search results for phone number:", error);
    };

  return (
    <div className="orders-container">
      <h1>All Orders</h1>
      {error && <p className="error">{error}</p>}

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Button label="Search" onClick={handleSearch} />
      </div>

      <table border="1" cellPadding="10" cellSpacing="0" className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Phone</th>
            <th>Total ($)</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.phoneNumber}</td>
              <td>{order.total.toFixed(2)}</td>
              <td>
                <ul>
                  {order.items.map(item => (
                    <li key={item.id}>
                      {item.productNumber}-{item.productName}({item.quantity})×${item.price}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">
        <Button label="Back to Home" />
      </Link>
    </div>
  );
}
