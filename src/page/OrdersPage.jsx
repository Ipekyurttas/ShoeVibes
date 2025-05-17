import React from "react";
import SearchBar from "./SearchBar.jsx";
import { FaFilter } from "react-icons/fa";
import order2 from "../images/order2.jpeg";
import order3 from "../images/order3.jpeg";
import order4 from "../images/order4.jpeg";
import order5 from "../images/order5.jpeg";




const orders = [
    {
        date: "24 Mart 2025",
        total: 193.48,
        status: "İade Edildi",
        refundedAmount: 193.48,
        products: [
            {
                id: 1,
                img: order2,
                returned: true,
            },
        ],
    },
    {
        date: "7 Mart 2025",
        total: 430.66,
        status: "Siparişiniz Tamamlandı",
        refundedAmount: null,
        products: [
            {
                id: 2,
                img: order4,
                returned: true,
            },
            {
                id: 3,
                img: order3,
                returned: true,
            },
            {
                id: 4,
                img: order5,
                returned: false,
            },
        ],
    },
];
export default function OrdersPage() {
    return (
        <div className="p-4 max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">🧾 Siparişlerim</h1>

            {/* 🔍 Arama Çubuğu */}
            <div className="mb-5">
                <SearchBar />
            </div>

            {orders.map((order, index) => (
                <div key={index} className="border rounded-xl p-5 mb-6 shadow-md">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-700 text-base font-medium">{order.date}</span>
                        <span className="text-orange-600 text-lg font-semibold">
                            Toplam: {order.total.toFixed(2)} TL
                        </span>
                    </div>
                    <div className="mb-3">
                        {order.status === "İade Edildi" ? (
                            <p className="text-red-600 font-semibold text-base">
                                ↩️ {order.status} – {order.refundedAmount.toFixed(2)} TL iade edildi
                            </p>
                        ) : (
                            <p className="text-green-600 font-semibold text-base">
                                ✅ {order.status}
                            </p>
                        )}
                    </div>
                    <div className="flex gap-3 mt-2">
                        {order.products.map((product) => (
                            <div key={product.id} className="relative">
                                <img
                                    src={product.img}
                                    alt="Ürün"
                                    className="w-16 h-16 rounded shadow"
                                />
                                {product.returned && (
                                    <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-bl">
                                        İade
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
