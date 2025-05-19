import React, { useState } from 'react';
import '../CSS/Payment.css';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("credit_card");

  const savedAddresses = [
    { id: 1, label: "Home Address", address: "123 Main St, Istanbul" },
    { id: 2, label: "Work Address", address: "456 Office Ave, Ankara" }
  ];

  const handleConfirmPayment = () => {
    if (!selectedAddress) {
      alert("Please select an address.");
      return;
    }
    alert("Payment successful!");
    navigate("/order"); 
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>

      <div className="section">
        <h4>Select Delivery Address</h4>
        {savedAddresses.map(addr => (
          <div key={addr.id}>
            <input
              type="radio"
              name="address"
              value={addr.id}
              onChange={() => setSelectedAddress(addr)}
            />
            <label>{addr.label} - {addr.address}</label>
          </div>
        ))}
      </div>

      <div className="section">
        <h4>Select Payment Method</h4>
        <select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)}>
          <option value="credit_card">Credit Card</option>
          <option value="cash_on_delivery">Cash on Delivery</option>
          <option value="bank_transfer">Bank Transfer</option>
        </select>
      </div>

      <button className="btn btn-success mt-3" onClick={handleConfirmPayment}>
        Confirm & Pay
      </button>
    </div>
  );
};

export default Payment;
