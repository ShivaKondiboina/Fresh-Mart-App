import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from './store';
import { Link } from 'react-router-dom';
import QRCode from 'react-qr-code';
import emailjs from 'emailjs-com';

function Cart() {
  const cartItems = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  const [manualDiscountPercent, setManualDiscountPercent] = useState(0);
  const [couponDiscountPercent, setCouponDiscountPercent] = useState(0);
  const [couponError, setCouponError] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState('');
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [email, setEmail] = useState('');
  const couponCodeRef = useRef();

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const combinedDiscountPercent = manualDiscountPercent + couponDiscountPercent;
  const discountAmount = (total * combinedDiscountPercent) / 100;
  const discountedPrice = total - discountAmount;
  const tax = (discountedPrice * 5) / 100;
  const finalPrice = discountedPrice + tax;

  const handleCouponApply = () => {
    const code = couponCodeRef.current.value.trim().toUpperCase();
    switch (code) {
      case 'LUCKY123':
        setCouponDiscountPercent(10);
        setCouponError('');
        setAppliedCoupon(code);
        break;
      case 'LUCKY1':
        setCouponDiscountPercent(5);
        setCouponError('');
        setAppliedCoupon(code);
        break;
      case 'SAVE12':
        setCouponDiscountPercent(15);
        setCouponError('');
        setAppliedCoupon(code);
        break;
      default:
        setCouponDiscountPercent(0);
        setCouponError('❌ Invalid coupon code');
        setAppliedCoupon('');
    }
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setPaymentConfirmed(false);
  };

  const confirmPayment = () => {
    if (!email || !email.includes('@')) {
      alert('❗ Please enter a valid email address.');
      return;
    }

    const newOrderId = 'ORD-' + Date.now();
    setOrderId(newOrderId);

    const order = {
      orderId: newOrderId,
      items: cartItems,
      total,
      discountPercent: combinedDiscountPercent,
      discountAmount,
      tax,
      finalPrice,
      appliedCoupon,
      email,
      date: new Date().toLocaleString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    localStorage.setItem('orders', JSON.stringify([...existingOrders, order]));

    const templateParams = {
      order_id: order.orderId,
      final_amount: finalPrice.toFixed(2),
      purchase_datetime: order.date,
      tax: tax.toFixed(2),
      email: email,
    };

    emailjs.send(
      'service_0jbfvnl',
      'template_d00pe6m',
      templateParams,
      'TgkrHDaTUpaSS9wzd'
    )
    .then(
      (response) => {
        console.log('✅ SUCCESS!', response.status, response.text);
        alert('✅ Email sent to ' + email);
      },
      (error) => {
        console.error('❌ FAILED...', error);
        alert('❌ Failed to send email. Please check console for details.');
      }
    );

    setPurchaseCompleted(true);
  };

  useEffect(() => {
    if (purchaseCompleted) {
      const message = new SpeechSynthesisUtterance(
        `Thank you for your purchase. Your order ID is ${orderId}. Your final bill is ₹${finalPrice.toFixed(2)}. We hope to see you again soon!`
      );
      message.rate = 1;
      message.pitch = 1;
      message.lang = 'en-IN';
      window.speechSynthesis.speak(message);
    }
  }, [purchaseCompleted, orderId, finalPrice]);

  if (purchaseCompleted) {
    return (
      <div className="page">
        <div className="success-message">
          <h1>✅ Thank you for your purchase!</h1>
          <h2>Your order has been placed.</h2>
          <h3>🧾 Order ID: {orderId}</h3>
          <ul>
            {cartItems.map((item, idx) => (
              <li key={idx}>
                {item.name} x {item.quantity} = ₹{(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <p>Total: ₹{total.toFixed(2)}</p>
          <p>Discount: ₹{discountAmount.toFixed(2)}</p>
          <p>Tax: ₹{tax.toFixed(2)}</p>
          <h4>Final Price: ₹{finalPrice.toFixed(2)}</h4>
          <Link to="/order">
            <button style={{ marginTop: '20px' }}>📦 View All Orders</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <h2>Your Cart ({cartCount} {cartCount === 1 ? 'item' : 'items'})</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="product-grid">
            {cartItems.map((item) => (
              <div className="card" key={item.id || item.name}>
                <img src={item.image} alt={item.name} className="product-image" />
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p><strong>Item Total: ₹{(item.price * item.quantity).toFixed(2)}</strong></p>

                <div className="quantity-controls">
                  <button onClick={() => dispatch(decrementQuantity(item))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQuantity(item))}>+</button>
                </div>

                <button onClick={() => dispatch(removeFromCart(item))} className="remove">
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="discount-buttons">
            <p>Apply Manual Discount:</p>
            {[10, 20, 30].map(percent => (
              <button key={percent} onClick={() => setManualDiscountPercent(percent)}>
                {percent}%
              </button>
            ))}
          </div>

          <div className="coupon-section">
            <p>Apply Coupon Code:</p>
            <input type="text" ref={couponCodeRef} placeholder="Enter coupon code" />
            <button onClick={handleCouponApply}>Apply</button>
            {couponError && <p style={{ color: 'red' }}>{couponError}</p>}
            {appliedCoupon && <p style={{ color: 'green' }}>✔ Coupon "{appliedCoupon}" applied!</p>}
          </div>

          <div style={{ marginTop: '20px' }}>
            <p>Enter your email to receive order confirmation:</p>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="totals">
            <p><strong>Total Amount: ₹{total.toFixed(2)}</strong></p>
            <p>Discount ({combinedDiscountPercent}%): ₹{discountAmount.toFixed(2)}</p>
            <p>Tax (5%): ₹{tax.toFixed(2)}</p>
            <h3>Final Price to Pay: ₹{finalPrice.toFixed(2)}</h3>
          </div>

          <div className="payment-methods">
            <h3>Choose Payment Method</h3>
            <button onClick={() => handlePaymentMethodChange('UPI')}>UPI Payment</button>
            <button onClick={() => handlePaymentMethodChange('Card')}>Credit/Debit Card</button>
            <button onClick={() => handlePaymentMethodChange('Wallet')}>Wallet</button>
          </div>

          {paymentMethod === 'UPI' && (
            <div className="qr-popup">
              <h3>Scan to Pay via UPI</h3>
              <QRCode
                value={`upi://pay?pa=9398681426@ibl&pn=SivaStore&am=${finalPrice.toFixed(2)}&cu=INR`}
              />
              <p>Scan this QR with any UPI app</p>
              <label>
                <input
                  type="checkbox"
                  checked={paymentConfirmed}
                  onChange={(e) => setPaymentConfirmed(e.target.checked)}
                /> I have completed the payment
              </label>
              <button onClick={confirmPayment} disabled={!paymentConfirmed}>Complete Order</button>
            </div>
          )}

          {paymentMethod === 'Card' && (
            <div className="card-payment">
              <h3>Enter Card Details</h3>
              <input type="text" placeholder="Card Number" maxLength="16" />
              <input type="text" placeholder="Cardholder Name" />
              <input type="text" placeholder="MM/YY" maxLength="5" />
              <input type="text" placeholder="CVV" maxLength="3" />
              <label>
                <input
                  type="checkbox"
                  checked={paymentConfirmed}
                  onChange={(e) => setPaymentConfirmed(e.target.checked)}
                /> I confirm payment was successful
              </label>
              <button onClick={confirmPayment} disabled={!paymentConfirmed}>Pay ₹{finalPrice.toFixed(2)}</button>
            </div>
          )}

          {paymentMethod === 'Wallet' && (
            <div className="wallet-payment">
              <h3>Wallet Payment</h3>
              <select>
                <option>-- Select Wallet --</option>
                <option>Paytm</option>
                <option>PhonePe</option>
                <option>Amazon Pay</option>
              </select>
              <input type="text" placeholder="Mobile Number" maxLength="10" />
              <label>
                <input
                  type="checkbox"
                  checked={paymentConfirmed}
                  onChange={(e) => setPaymentConfirmed(e.target.checked)}
                /> I confirm payment was successful
              </label>
              <button onClick={confirmPayment} disabled={!paymentConfirmed}>Pay ₹{finalPrice.toFixed(2)}</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;
