import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import "./OrdersPage.css";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/orders")
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="orders-container">
      <h1>All Orders</h1>

      <table className="orders-table">
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
                      {item.productNumber} — {item.productName} -- {item.quantity} × ${item.price}
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
    </section>
  );
}