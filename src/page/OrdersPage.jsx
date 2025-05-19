import React, { useEffect, useState } from 'react';
import { getOrders } from '../services/orderService';
import ProfileHomeNav from '../component/ProfileHomeNav';
import CategoryNav from '../component/CategoryNav';
import Footer from '../component/Footer';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getOrders();
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <>
      <ProfileHomeNav />
      <CategoryNav />
      <div className="order-container">
        <h2>Siparişlerim</h2>
        {orders.length === 0 ? (
          <p>Henüz siparişiniz yok.</p>
        ) : (
          <ul>
            {orders.map(order => (
              <li key={order.id}>
                <p>Sipariş ID: {order.id}</p>
                <p>Tarih: {new Date(order.date).toLocaleDateString()}</p>
                <p>Toplam: {order.total} TL</p>
                <ul>
                  {order.items.map(item => (
                    <li key={item.product.id}>
                      {item.product.name} - {item.quantity} adet
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </>
  );
};

export default OrdersPage;
