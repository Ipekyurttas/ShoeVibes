import React, { useState } from 'react';
import '../CSS/CategorySideBar.css';

const CategorySidebar = () => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const categories = [
    {
      name: 'Brands',
      options: ['Nike', 'Adidas', 'Puma', 'Sketchers', 'Vans', 'Converse', 'Lumberjack', 'Us.Polo Assn.']
    },
    {
      name: 'Color',
      options: ['Siyah', 'Bej', 'Kırmızı', 'Mavi']
    },
    {
      name: 'Price',
      options: ['300-600', '600-900', '900-1200', '1200-1500', '1500+']
    },
    {
      name: 'Size',
      options: ['36', '37', '38', '39', '40', '41', '42', '43', '44']
    },
    {
      name: 'Material',
      options: ['Suni Deri', 'Hakiki Deri', 'Kauçuk']
    },
    {
      name: 'Kargo',
      options: ['Bedava Kargo']
    },
    {
      name: 'Cupon',
      options: ['Kuponlu Ürün']
    }
  ];

  return (
    <div className="sidebar-card">
      <div className="sidebar-header">
        <h5>Filter</h5>
      </div>

      <div className="sidebar-categories">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`sidebar-category ${expandedCategories[category.name] ? 'expanded' : ''}`}
          >
            <div className="category-title" onClick={() => toggleCategory(category.name)}>
              {category.name}
              <i className={`bi bi-chevron-${expandedCategories[category.name] ? 'up' : 'down'}`}></i>
            </div>

            <div className="category-options">
              {category.options.map((option, optIndex) => (
                <div key={optIndex} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`${category.name}-${optIndex}`}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`${category.name}-${optIndex}`}
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="btn apply-btn w-100 mt-3">
        Apply
      </button>
    </div>
  );
};

export default CategorySidebar;
