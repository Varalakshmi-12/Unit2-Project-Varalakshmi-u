/*import React from "react";
import Button from "../components/Button";

export default function CartItem({ cart, updateQuantity, deleteItem }) {
  return (
    <table className="cart-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Price ($)</th>
          <th>Qty</th>
          <th>Total ($)</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) =>
                  updateQuantity(item.id, e.target.value)
                }
              />
            </td>
            <td>{item.price * item.quantity}</td>
            <td>
              <Button
                
                onClick={() => deleteItem(item.id)}
              label="Delete"
                
              />
            </td>
          </tr>
        ))}
        </tbody>
      </table>
  );
}*/
import React from "react";
import Button from "../components/Button";

export default function CartItem({
  cart,
  updateQuantity,
  deleteItem,
}) {
  return (
    <table className="cart-table">
      <thead>
        <tr>
          <th>ProductNumber</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {cart.map((item) => (
          <tr key={item.productNumber}>
            <td>{item.productNumber}</td>
            <td>{item.price}</td>

            <td>
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) =>
                  updateQuantity(
                    item.productNumber,
                    e.target.value
                  )
                }
              />
            </td>

            <td>{item.price * item.quantity}</td>

            <td>
              <Button
                label="Delete"
                onClick={() =>
                  deleteItem(item.productNumber)
                }
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
