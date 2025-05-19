import React, { useState } from 'react';
import CategorySidebar from './CategorySidebar';
import ProductList from './ProductList';

const ShopPage = () => {
  const [appliedFilters, setAppliedFilters] = useState(null);

  const handleApplyFilters = (filters) => {
    setAppliedFilters(filters);
  };

  return (
    <div className="shop-container d-flex">
      <CategorySidebar onApplyFilters={handleApplyFilters} />
      <ProductList filters={appliedFilters} />
    </div>
  );
};

export default ShopPage;
