import React from 'react';
import "../CSS/ProductList.css";
import stiletto from "../images/stiletto.webp";
import pumaerkek from "../images/pumaerkek.jpeg";
import nike from "../images/nikebrands.webp";
import converse from "../images/conversebrands1.webp";

const ProductList = () => {
    const products = [
        {
            id: 1,
            image: stiletto,
            brand: 'Reebok',
            name: 'Reebok PRIME SET KIRIK BEYAZ...',
            price: '2.499,99 TL'
        },
        {
            id: 2,
            image: pumaerkek,
            brand: 'Reebok',
            name: 'Reebok FOOTE CORNERS Beugz...',
            price: '2.999,99 TL'
        },
        {
            id: 3,
            image: nike,
            brand: 'Reebok',
            name: 'Reebok HIRANO LITE S Beugz...',
            price: '2.499,99 TL'
        },
        {
            id: 4,
            image: converse,
            brand: 'Reebok',
            name: 'Reebok ANDY POSE Beugz Erkek...',
            price: '2.999,99 TL'
        },
    ];

    return (
        <div className="product-list-container">
            <div className="products-grid mb-5">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <p className="product-brand">{product.brand}</p>
                        <p className="product-name">{product.name}</p>
                        <p className="product-price">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;