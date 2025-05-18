import React, { useState } from 'react';
import '../CSS/Payment.css';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();

  const savedAddresses = [
    {
      id: 1,
      label: "Home Address",
      address: "Moda Neighborhood, 123rd St. No:5, Kadikoy, Istanbul"
    },
    {
      id: 2,
      label: "Work Address",
      address: "Kizilay Neighborhood, No:10, Cankaya, Ankara"
    }
  ];

  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [address, setAddress] = useState('');
  const [agreementChecked, setAgreementChecked] = useState(false);

  const [form, setForm] = useState({
    fullName: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });

  const handleAddressSelect = (id) => {
    const selected = savedAddresses.find(a => a.id === parseInt(id));
    setSelectedAddressId(id);
    setAddress(selected?.address || '');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      const cleaned = value.replace(/\D/g, "").slice(0, 16);
      const formatted = cleaned.replace(/(.{4})/g, "$1 ").trim();
      setForm(prev => ({ ...prev, [name]: formatted }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleAgreementClick = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  const handlePayment = () => {
    if (!agreementChecked) {
      alert("Lütfen sözleşmeyi kabul ediniz.");
      return;
    }
    alert("Ödeme işlemi tamamlandı!");
  };

  return (
    <div className="container  payment-page">
      <div className="row">
        <div className="col-md-7">
          <h3 className="mb-4">Payment Details</h3>

          <div className="mb-4">
            <label className="form-label">Saved Addresses</label>
            <select
              className="form-select"
              value={selectedAddressId || ''}
              onChange={(e) => handleAddressSelect(e.target.value)}
            >
              <option value="">Select an address</option>
              {savedAddresses.map(addr => (
                <option key={addr.id} value={addr.id}>{addr.label}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="form-label">Address</label>
            <textarea
              className="form-control"
              rows="2"
              value={address}
              readOnly
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Card Number</label>
            <input
              type="text"
              className="form-control"
              name="cardNumber"
              value={form.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Expiry Date</label>
              <input
                type="text"
                className="form-control"
                name="expiry"
                placeholder="MM/YY"
                value={form.expiry}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">CVC</label>
              <input
                type="text"
                className="form-control"
                name="cvc"
                value={form.cvc}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-check mb-3 d-flex align-items-center">
            <input
              className="form-check-input me-2"
              type="checkbox"
              id="agreement"
              checked={agreementChecked}
              onChange={() => setAgreementChecked(!agreementChecked)}
              style={{ width: '16px', height: '16px' }}
            />
            <label className="form-check-label" htmlFor="agreement">
              I read the agreement, <a href="#" onClick={handleAgreementClick}></a> I accept the agreement.
            </label>
          </div>

          <button
            className="btn btn-success w-100 mt-3"
            onClick={handlePayment}
          >
            Complete Payment
          </button>
        </div>

        <div className="col-md-5">
          <div className="order-summary">
            <h5 className="mb-3">Order Summary</h5>
            <div className="summary-item">
              <span>Subtotal</span>
              <span>2,499.99 TL</span>
            </div>
            <div className="summary-item">
              <span>Shipping</span>
              <span>69.99 TL</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>2,569.98 TL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;