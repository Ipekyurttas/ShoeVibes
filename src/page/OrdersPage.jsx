import React from "react";
import SearchBar from "./SearchBar.jsx";
import { FaArrowRight } from "react-icons/fa";
import order2 from "../images/order2.jpeg";
import order3 from "../images/order3.jpeg";
import order5 from "../images/order5.jpeg";
import "../CSS/Orders.css";
import UserHeader from "../component/UserHeader.jsx";
import "../CSS/UserHeader.css";

const orders = [
    {
        date: "24 Mart 2025",
        total: 193.48,
        status: "İade Edildi",
        refundedAmount: 193.48,
        products: [
            { id: 1, img: order2, returned: true },
        ],
    },
    {
        date: "7 Mart 2025",
        total: 430.66,
        status: "Siparişiniz Tamamlandı",
        refundedAmount: null,
        products: [
            { id: 2, img: order2, returned: true },
            { id: 3, img: order3, returned: true },
            { id: 4, img: order5, returned: false },
        ],
    },
    {
        date: "1 Nisan 2025",
        total: 299.99,
        status: "Siparişiniz Tamamlandı",
        refundedAmount: null,
        products: [
            { id: 5, img: order3, returned: false },
        ],
    },
    {
        date: "15 Nisan 2025",
        total: 120.00,
        status: "İade Edildi",
        refundedAmount: 120.00,
        products: [
            { id: 6, img: order5, returned: true },
        ],
    },
    {
        date: "20 Nisan 2025",
        total: 560.50,
        status: "Siparişiniz Tamamlandı",
        refundedAmount: null,
        products: [
            { id: 7, img: order2, returned: false },
            { id: 8, img: order3, returned: false },
        ],
    },
];


export default function OrdersPage() {
    return (
        <div className="p-4 max-w-xl mx-auto">

            <UserHeader />
            <br /><br /><br />

            <h1 className="text-3xl font-bold mb-6">🧾 Siparişlerim</h1>

            {/* Arama Çubuğu */}
            <div className="mb-5">
                <SearchBar />
            </div>

            {orders.map((order, index) => (
                <div key={index} className="border rounded-xl p-5 mb-6 shadow-sm bg-white">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <p className="text-sm text-gray-500">{order.date}</p>
                            <p className="text-base font-semibold text-gray-800">
                                Toplam: {order.total.toFixed(2)} TL
                            </p>
                        </div>
                        <button className="buton2">
                            Detaylar <FaArrowRight />
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
                                <img
                                    src={product.img}
                                    alt="Ürün"
                                    className="resim"

                                />

                            </div>
                        ))}
                    </div>
                </div>


            ))}
        </div>
    );
}
