// src/components/ProductFilters.jsx
import React, { useState } from 'react';

const ProductFilters = ({ categories, onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleFilter = (e) => {
    setSelectedCategory(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="product-filters">
      <select value={selectedCategory} onChange={handleFilter}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilters;
