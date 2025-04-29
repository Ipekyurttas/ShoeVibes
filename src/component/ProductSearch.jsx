import React, { useState } from "react";
import axios from "axios";

const ProductSearch = () => {
    const [query, setQuery] = useState("");
    const [products, setProducts] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`/api/products/search?query=${query}`);
            setProducts(response.data);
        } catch (error) {
            console.error("Arama sırasında hata oluştu:", error);
        }
    };

    return (
        <div className="p-4 max-w-xl mx-auto">
            <form onSubmit={handleSearch} className="flex gap-2 mb-4">
                <input
                    type="text"
                    placeholder="Ürün ara..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Ara
                </button>
            </form>

            {products.length > 0 ? (
                <ul className="space-y-3">
                    {products.map((product) => (
                        <li
                            key={product.id}
                            className="p-4 border border-gray-200 rounded shadow-sm"
                        >
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p>{product.description}</p>
                            <span className="text-green-600 font-bold">{product.price} TL</span>
                        </li>
                    ))}
                </ul>
            ) : (
                query && <p className="text-gray-500">Sonuç bulunamadı.</p>
            )}
        </div>
    );
};

export default ProductSearch;
