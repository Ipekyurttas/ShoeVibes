import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProfileHomeNav from '../component/ProfileHomeNav';
import CategoryNav from '../component/CategoryNav';
import Footer from '../component/Footer';
import "../CSS/NewOrder.css";

const OrdersPage = () => {
  const [order, setOrder] = useState(null);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const createOrder = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/orders/create",
          null,
          {
            params: { address: "Rize" },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setOrder(response.data);
      } catch (err) {
        console.error("Sipariş oluşturulamadı:", err);
      }
    };

    createOrder();
  }, [token]);

  const handleConfirmOrder = () => {
    navigate("/");
  };

  const getImageUrl = (url) => `http://localhost:8080${url}`;

  return (
    <>
      <ProfileHomeNav />
      <CategoryNav />
      <div className="container my-5">
        <div className="order-success-wrapper p-4 rounded shadow">
          <h2 className="mb-4 text-success">🎉 Siparişiniz Başarıyla Oluşturuldu</h2>

          {!order ? (
            <p className="text-muted">Yükleniyor...</p>
          ) : (
            <div className="order-details">
              <div className="mb-3"><strong>Sipariş ID:</strong> #{order.id}</div>
              <div className="mb-3"><strong>Tarih:</strong> {new Date(order.dateTime).toLocaleString('tr-TR')}</div>
              <div className="mb-3"><strong>Ad Soyad:</strong> {order.userName} {order.lastName}</div>
              <div className="mb-3"><strong>Adres:</strong> {order.address}</div>
              <div className="mb-4"><strong>Toplam Tutar:</strong> {order.totalPrice.toLocaleString('tr-TR')} TL</div>

              <h5 className="mb-3">📦 Siparişinizdeki Ürünler:</h5>
              <div className="order-products-list mb-4">
                {order.productNames.map((name, index) => (
                  <div key={index} className="d-flex align-items-center mb-2 order-product-item">
                    <img
                      src={getImageUrl(order.productImages[index])}
                      alt={name}
                      className="me-3 rounded"
                      width="80"
                      height="80"
                    />
                    <span className="product-name fs-6">{name}</span>
                  </div>
                ))}
              </div>

              <button className="btn btn-success w-100" onClick={handleConfirmOrder}>
                Anasayfaya Dön
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrdersPage;
