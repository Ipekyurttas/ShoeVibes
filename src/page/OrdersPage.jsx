import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import order2 from "../images/order2.jpeg";
import order3 from "../images/order3.jpeg";
import ProfileHome from "../component/ProfileHomeNav.jsx";
import ProfileSideBar from "../component/ProfileSideBar.jsx";
import CategoryNav from "../component/CategoryNav.jsx";
import TopNavbar from "../component/TopNav.jsx";
import Footer from "../component/Footer.jsx";

const orders = [
    {
        date: "24 Mart 2025",
        total: 193.48,
        status: "İade Edildi",
        refundedAmount: 193.48,
        products: [
            { id: 1, name: "Ürün 1", img: order2, returned: true },
            { id: 2, name: "Ürün 2", img: order3, returned: false },
        ],
    },
    {
        date: "18 Mart 2025",
        total: 320.75,
        status: "Teslim Edildi",
        products: [
            { id: 3, name: "Ürün 3", img: order3, returned: false },
            { id: 4, name: "Ürün 4", img: order2, returned: false },
        ],
    },
    {
        date: "10 Mart 2025",
        total: 89.99,
        status: "İade Edildi",
        refundedAmount: 89.99,
        products: [
            { id: 5, name: "Ürün 5", img: order2, returned: true },
        ],
    },
    {
        date: "2 Mart 2025",
        total: 450.00,
        status: "Teslim Edildi",
        products: [
            { id: 6, name: "Ürün 6", img: order3, returned: false },
            { id: 7, name: "Ürün 7", img: order2, returned: false },
            { id: 8, name: "Ürün 8", img: order3, returned: false },
        ],
    },
];

export default function OrdersPage() {
    const [searchText, setSearchText] = useState("");
    const [expandedOrderIndex, setExpandedOrderIndex] = useState(null);

    const handleClearSearch = () => setSearchText("");
    const toggleDetails = (index) => {
        setExpandedOrderIndex(index === expandedOrderIndex ? null : index);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <style>{`
                .card {
                    width: 65%;
                    height: 200px;
                    background-color: rgb(212, 217, 218);
                    color: black;
                }

                .resim {
                    width: 150px;
                    height: 120px;
                    border-radius: 10px;
                    object-fit: cover;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    flex-shrink: 0;
                }

                @media (min-width: 640px) {
                    .resim {
                        width: 96px;
                        height: 96px;
                    }
                }

                @media (min-width: 1024px) {
                    .resim {
                        width: 128px;
                        height: 128px;
                    }
                }

                .p-4 { padding: 1rem; }
                .max-w-xl { max-width: 600px; margin: 0 auto; }

                @media (min-width: 1024px) {
                    .max-w-xl { max-width: 900px; }
                    .p-4 { padding: 2rem; }
                }

                .border { border: 1px solid #ddd; border-radius: 12px; }
                .shadow-sm { box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
                .bg-white { background-color: white; }

                .flex { display: flex; }
                .justify-between { justify-content: space-between; }
                .items-center { align-items: center; }
                .items-start { align-items: flex-start; }

                .mb-6 { margin-bottom: 1.5rem; }
                .mb-5 { margin-bottom: 1.25rem; }
                .mb-3 { margin-bottom: 0.75rem; }
                .mb-2 { margin-bottom: 0.5rem; }
                .mt-2 { margin-top: 0.5rem; }
                .gap-1 { gap: 0.25rem; }
                .gap-3 { gap: 0.75rem; }

                .text-sm { font-size: 0.875rem; }
                .text-base { font-size: 1rem; }
                .text-gray-500 { color: #6b7280; }
                .text-gray-800 { color: #1f2937; }
                .text-orange-600 { color: #d97706; }
                .text-red-600 { color: #dc2626; }
                .text-green-600 { color: #22c55e; }
                .font-semibold { font-weight: 600; }
                .text-3xl { font-size: 1.875rem; font-weight: 700; margin-bottom: 1.5rem; }

                .absolute { position: absolute; }
                .top-0 { top: 0; }
                .right-0 { right: 0; }
                .bg-red-600 { background-color: #dc2626; }
                .text-white { color: white; }
                .px-1 { padding: 0 0.25rem; }
                .rounded-bl { border-bottom-left-radius: 0.375rem; }

                .overflow-x-auto {
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                }

                .buton2 {
                    color: white;
                    font-size: 0.875rem;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    background-color: #834d19;
                    padding: 6px 10px;
                    border-radius: 6px;
                    border: none;
                }

                .sidebar {
                    width: 400px;
                }
            `}</style>

            <div className="w-full sticky top-0 z-10 bg-white shadow-sm">
                <ProfileHome />
                <CategoryNav />
            </div>

            <div className="flex">
                <div className="sidebar fixed h-screen bg-white shadow-sm">
                    <ProfileSideBar />
                </div>

                <div className="ml-64 p-4 w-full">
                    <div className="max-w-xl mx-auto">
                        <h1 className="text-3xl font-bold mb-6">🧾 Siparişlerim</h1>

                        <div className="mb-5">
                            <Form className="d-flex custom-search-form" style={{ flexGrow: 1 }}>
                                <FormControl
                                    type="search"
                                    placeholder="Ara..."
                                    className="me-2"
                                    aria-label="Search"
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    style={{ borderRadius: '5px', width: '100%' }}
                                />
                                {searchText && (
                                    <Button
                                        variant="link"
                                        onClick={handleClearSearch}
                                        style={{ marginLeft: '-40px', zIndex: 1 }}
                                    >
                                        <FaTimes size={20} color="#6a380a" />
                                    </Button>
                                )}
                            </Form>
                        </div>

                        {orders
                            .filter(order =>
                                order.products.some(p =>
                                    p.name.toLowerCase().includes(searchText.toLowerCase())
                                )
                            )
                            .map((order, index) => (
                                <div key={index} className="border rounded-xl p-5 mb-6 shadow-sm bg-white">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <p className="text-sm text-gray-500">{order.date}</p>
                                            <p className="text-base font-semibold text-gray-800">
                                                Toplam: {order.total.toFixed(2)} TL
                                            </p>
                                        </div>
                                        <button className="buton2" onClick={() => toggleDetails(index)}>
                                            {expandedOrderIndex === index ? "Gizle" : "Detaylar"} <FaArrowRight />
                                        </button>
                                    </div>

                                    <div className="mb-3">
                                        {order.status === "İade Edildi" ? (
                                            <p className="text-red-600 font-semibold text-sm">
                                                ↩️ {order.status} – {order.refundedAmount.toFixed(2)} TL iade edildi
                                            </p>
                                        ) : (
                                            <p className="text-green-600 font-semibold text-sm">
                                                ✅ {order.status}
                                            </p>
                                        )}
                                    </div>

                                    <div className="flex gap-3 mt-2 overflow-x-auto">
                                        {order.products.map((product) => (
                                            <div key={product.id} className="relative shrink-0">
                                                <img src={product.img} alt={product.name} className="resim" />
                                                {product.returned && (
                                                    <span className="absolute top-0 right-0 bg-red-600 text-white text-xs px-1 rounded-bl">
                                                        İade
                                                    </span>
                                                )}
                                                <p className="text-xs mt-1 text-center">{product.name}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {expandedOrderIndex === index && (
                                        <div className="mt-4 bg-gray-50 p-4 border rounded">
                                            <h2 className="text-lg font-semibold mb-2">Sipariş Detayları</h2>
                                            <ul className="list-disc pl-5 text-sm text-gray-700">
                                                {order.products.map((product) => (
                                                    <li key={product.id}>
                                                        {product.name} {product.returned ? "(İade Edildi)" : ""}
                                                    </li>
                                                ))}
                                            </ul>
                                            <p className="mt-2 text-sm text-gray-600">
                                                Sipariş Durumu: <strong>{order.status}</strong>
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                Toplam Tutar: <strong>{order.total.toFixed(2)} TL</strong>
                                            </p>
                                            {order.status === "İade Edildi" && (
                                                <p className="text-sm text-red-600 font-semibold">
                                                    İade Tutarı: {order.refundedAmount.toFixed(2)} TL
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
