import React, { useState } from 'react';
import './style.css'

const productsData = [
  { name: 'bag 1', category: 'bags' },
  { name: 'watch 2', category: 'watchss' },
  { name: 'bag 3', category: 'bags' },
  { name: 'Product 4', category: 'category3' },
  { name: 'waxx 5', category: 'watchss' },
  { name: 'Product 6', category: 'category3' },
];

const App = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // -==============

  const handleFilterClick = (filter) => {
    if (filter === selectedFilter) return; 
    setSelectedFilter(filter);
 const filtered = filter === 'all'
      ? productsData
      : productsData.filter(product => product.category === filter);

    setFilteredProducts(filtered);
  };
// =================
  return (
    <div id="filters-bar">
      <button
        className={selectedFilter === 'all' ? 'filter-button active' : 'filter-button'}
        onClick={() => handleFilterClick('all')}
      >
        All
      </button>
      <button
        className={selectedFilter === 'bags' ? 'filter-button active' : 'filter-button'}
        onClick={() => handleFilterClick('bags')}
      >
      bags
      </button>
      <button
        className={selectedFilter === 'watchss' ? 'filter-button active' : 'filter-button'}
        onClick={() => handleFilterClick('watchss')}
      >
        wwxct
      </button>
      <button
        className={selectedFilter === 'category3' ? 'filter-button active' : 'filter-button'}
        onClick={() => handleFilterClick('category3')}
      >
        Category 3
      </button>

      <div id="products-list">
        {filteredProducts.length && (
          <ul>
            {filteredProducts.map(product => (
              <li key={product.name}>{product.name}</li>
            ))}
          </ul>
        ) }
      </div>
    </div>
  );
};

export default App;

