import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../CSS/ProductList.css";

const ProductList = ({ filters }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      try {
        let response;
        if (filters && filters.Color && filters.Color.length > 0) {
          response = await axios.post('http://localhost:8080/products/filter', {
            category: "Color",
            subCategory: filters.Color[0]
          });
        } else {
          response = await axios.get('http://localhost:8080/products/list');
        }

        const data = response.data;
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.warn("API beklenmeyen formatta veri döndü:", data);
          setProducts([]);
        }

      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    };

    fetchFilteredProducts();
  }, [filters]);


  return (
    <div className="product-list-container">
      <div className="products-grid mb-5">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.images?.[0]?.url} alt={product.name} className="product-image" />
            <p className="product-brand">{product.brand}</p>
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price} TL</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
