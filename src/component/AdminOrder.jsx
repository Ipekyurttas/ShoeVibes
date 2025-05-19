import React, { useEffect, useState } from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import "../CSS/AdminOrder.css";

const AdminOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/orders/latest4")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Container className="order-status-page mt-5"><p>Loading orders...</p></Container>;
  }

  return (
    <Container className="order-status-page mt-5">
      <h2 className="section-title">Order Status</h2>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <Card key={order.id} className="order-card mb-3">
              <Card.Body className="d-flex align-items-start">
                {/* İlk ürünün resmi varsa göster, yoksa örnek görsel */}
                <Image
                  src={
                    order.productImages && order.productImages.length > 0 
                      ? `http://localhost:8080${order.productImages[0]}`
                      : "/path/to/default-image.jpg"
                  }
                  alt={
                    order.productNames && order.productNames.length > 0 
                      ? order.productNames[0] 
                      : "Product image"
                  }
                  className="order-product-image"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "/path/to/default-image.jpg";
                  }}
                />
                <div className="ms-3 flex-grow-1">
                  {/* İlk ürün adı */}
                  <h5 className="product-name mb-1">
                    {order.productNames && order.productNames.length > 0 ? order.productNames[0] : "No product name"}
                  </h5>
                  {/* Müşteri adı ve soyadı */}
                  <p className="customer-name mb-1">
                    <strong>Customer:</strong> {order.userName} {order.lastName}
                  </p>
                  {/* Sipariş tarihi - ISO formatını daha okunur yap */}
                  <p className="order-date mb-1">
                    <strong>Date:</strong> {new Date(order.dateTime).toLocaleString()}
                  </p>
                  <p className="order-address mb-1">
                    <strong>Address:</strong> {order.address}
                  </p>
                  <p className="order-totalPrice mb-1">
                    <strong>Total Price:</strong> {order.totalPrice} ₺
                  </p>
                  <span className="order-status-label">Order Received</span>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </Container>
  );
};

export default AdminOrder;