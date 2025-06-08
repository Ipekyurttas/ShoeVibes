import React, { useState } from "react";
import { Form, FormControl, Button, Pagination } from "react-bootstrap";
import { FaArrowRight, FaTimes } from "react-icons/fa";

import order2 from "../images/order2.jpeg";
import order3 from "../images/order3.jpeg";
import ProfileHome from "../component/ProfileHomeNav.jsx";
import ProfileSideBar from "../component/ProfileSideBar.jsx";
import CategoryNav from "../component/CategoryNav.jsx";
import Footer from "../component/Footer.jsx";

import "../CSS/Orders.css";

const mockOrders = [
  {
    id: 1,
    date: "24 Mart 2025",
    total: 193.48,
    status: "İade Edildi",
    refundedAmount: 193.48,
    address: "İstanbul, Türkiye",
    dateTime: "2025-03-24 14:22",
    totalPrice: 193.48,
    orderItemIds: [101, 102],
    products: [
      { id: 1, name: "Ürün 1", img: order2, returned: true },
      { id: 2, name: "Ürün 2", img: order3, returned: false },
    ],
  },
  {
    id: 2,
    date: "18 Mart 2025",
    total: 320.75,
    status: "Teslim Edildi",
    address: "Ankara, Türkiye",
    dateTime: "2025-03-18 10:00",
    totalPrice: 320.75,
    orderItemIds: [201, 202],
    products: [
      { id: 3, name: "Ürün 3", img: order3, returned: false },
      { id: 4, name: "Ürün 4", img: order2, returned: false },
    ],
  },
  {
    id: 3,
    date: "15 Mart 2025",
    total: 580.5,
    status: "Teslim Edildi",
    address: "İzmir, Türkiye",
    dateTime: "2025-03-15 17:40",
    totalPrice: 580.5,
    orderItemIds: [301],
    products: [
      { id: 5, name: "Ürün 5", img: order2, returned: false },
    ],
  },
  {
    id: 4,
    date: "10 Mart 2025",
    total: 145.9,
    status: "İade Edildi",
    refundedAmount: 145.9,
    address: "Bursa, Türkiye",
    dateTime: "2025-03-10 09:10",
    totalPrice: 145.9,
    orderItemIds: [401],
    products: [
      { id: 6, name: "Ürün 6", img: order3, returned: true },
    ],
  },
];

export default function ProfilOrder() {
  const [searchText, setSearchText] = useState("");
  const [expandedOrders, setExpandedOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 2;

  const handleClearSearch = () => setSearchText("");

  const toggleOrderDetails = (orderId) => {
    setExpandedOrders((prev) =>
      prev.includes(orderId)
        ? prev.filter((id) => id !== orderId)
        : [...prev, orderId]
    );
  };

  const filteredOrders = mockOrders.filter((order) =>
    order.products.some((p) =>
      p.name.toLowerCase().includes(searchText.toLowerCase())
    )
  );

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  return (
    <div className="orders-page">
      <div className="sticky-header">
        <ProfileHome />
        <CategoryNav />
      </div>

      <div className="orders-layout">
        <div className="sidebar">
          <ProfileSideBar />
        </div>

        <div className="orders-content">
          <div className="orders-wrapper">
            <h1 className="orders-title">🧾 Siparişlerim</h1>

            <div className="orders-search">
              <Form className="d-flex" style={{ position: "relative" }}>
                <FormControl
                  type="search"
                  placeholder="Ara..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                {searchText && (
                  <Button
                    variant="link"
                    onClick={handleClearSearch}
                    className="clear-button"
                  >
                    <FaTimes size={20} color="#6a380a" />
                  </Button>
                )}
              </Form>
            </div>

            {currentOrders.map((order) => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <div>
                    <p className="order-date">{order.date}</p>
                    <p className="order-total">Toplam: {order.total.toFixed(2)} TL</p>
                  </div>
                  <button
                    onClick={() => toggleOrderDetails(order.id)}
                    className="order-details-button"
                  >
                    Detaylar <FaArrowRight />
                  </button>
                </div>

                <div className={`order-status ${order.status === "İade Edildi"
                  ? "order-status-returned"
                  : "order-status-delivered"
                  }`}>
                  {order.status === "İade Edildi" ? (
                    <span>↩ {order.status} – {order.refundedAmount.toFixed(2)} TL iade edildi</span>
                  ) : (
                    <span>✅ {order.status}</span>
                  )}
                </div>

                <div className="order-products">
                  {order.products.map((product) => (
                    <div key={product.id} className="product-image-wrapper">
                      <img src={product.img} alt={product.name} className="product-image" />
                      {product.returned && (
                        <span className="product-returned-badge">İade</span>
                      )}
                      <p className="product-name">{product.name}</p>
                    </div>
                  ))}
                </div>

                {expandedOrders.includes(order.id) && (
                  <div className="order-details">
                    <p><strong>Adres:</strong> {order.address}</p>
                    <p><strong>Tarih:</strong> {order.dateTime}</p>
                    <p><strong>Toplam Tutar:</strong> {order.totalPrice} TL</p>
                    <p><strong>Ürün ID’leri:</strong> {order.orderItemIds.join(", ")}</p>
                  </div>
                )}
              </div>
            ))}

            {totalPages > 1 && (
              <Pagination className="justify-content-center mt-4">
                {[...Array(totalPages).keys()].map((page) => (
                  <Pagination.Item
                    key={page + 1}
                    active={page + 1 === currentPage}
                    onClick={() => setCurrentPage(page + 1)}
                  >
                    {page + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}