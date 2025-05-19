import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import "../CSS/AdminOrder.css";
import sampleProduct from "../images/stiletto.webp"; // örnek görsel

const AdminOrder = () => {
  const orders = [
    {
      id: 1,
      customerName: "Ahmet Yılmaz",
      productName: "Klasik Deri Cüzdan",
      productImage: sampleProduct,
      orderDate: "2025-05-18"
    },
    {
      id: 2,
      customerName: "Zeynep Kaya",
      productName: "Bluetooth Kulaklık",
      productImage: sampleProduct,
      orderDate: "2025-05-17"
    },
    {
      id: 3,
      customerName: "Ali Demir",
      productName: "Spor Ayakkabı",
      productImage: sampleProduct,
      orderDate: "2025-05-15"
    }
  ];

  return (
    <Container className="order-status-page mt-5">
      <h2 className="section-title">Order Status</h2>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <Card key={order.id} className="order-card">
              <Card.Body className="d-flex align-items-start">
                <Image 
                  src={order.productImage}
                  alt={order.productName}
                  className="order-product-image"
                />
                <div className="ms-3 flex-grow-1">
                  <h5 className="product-name mb-1">{order.productName}</h5>
                  <p className="customer-name mb-1"><strong>Customer:</strong> {order.customerName}</p>
                  <p className="order-date mb-1"><strong>Date:</strong> {order.orderDate}</p>
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
