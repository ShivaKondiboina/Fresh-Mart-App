import React, { useEffect, useState } from 'react';

function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders.reverse()); // Most recent first
  }, []);

  if (orders.length === 0) {
    return (
      <div className="page">
        <h2>📦 Order History</h2>
        <p>No previous orders found.</p>
      </div>
    );
  }

  return (
    <div className="page">
      <h2>📦 Order History</h2>
      {orders.map((order, index) => (
        <div className="order-card" key={index}>
          <h3>🧾 Order ID: {order.orderId || 'N/A'}</h3>
          <p>🕒 Order Date: {order.date}</p>
          <ul>
            {order.items.map((item, idx) => (
              <li key={idx}>
                {item.name} x {item.quantity} = ₹{(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <p>Total: ₹{order.total.toFixed(2)}</p>
          <p>Discount ({order.discountPercent}%): ₹{order.discountAmount.toFixed(2)}</p>
          <p>Tax: ₹{order.tax.toFixed(2)}</p>
          <h4>Final Price Paid: ₹{order.finalPrice.toFixed(2)}</h4>
          {order.appliedCoupon && (
            <p>🎟 Coupon Used: <strong>{order.appliedCoupon}</strong></p>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Order;