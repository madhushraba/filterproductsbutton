import React, { useState } from 'react';

// const productsData = [
//   { name: 'Product 1', category: 'category1', color: 'red' },
//   { name: 'Product 2', category: 'category2', color: 'blue' },
//   { name: 'Product 3', category: 'category1', color: 'green' },
//   { name: 'Product 4', category: 'category3', color: 'red' },
//   { name: 'Product 5', category: 'category2', color: 'blue' },
//   { name: 'Product 6', category: 'category3', color: 'green' },
// ];

const FilterButtonsBar = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterClick = (filter) => {
    const updatedFilters = [...selectedFilters];

    // Check if the filter is already selected
    const filterIndex = updatedFilters.indexOf(filter);
    if (filterIndex !== -1) {
      updatedFilters.splice(filterIndex, 1); // Filter exists, remove it
    } else {
      updatedFilters.push(filter); // Filter doesn't exist, add it
    }

    setSelectedFilters(updatedFilters);
  };

  const applyFilters = () => {
    let filteredProducts = productsData;

    // Apply each selected filter
    selectedFilters.forEach(filter => {
      filteredProducts = filteredProducts.filter(product => product.category === filter);
    });

    return filteredProducts;
  };

  const filteredProducts = applyFilters();

  return (
    <div id="filters-bar">
      <button
        className={selectedFilters.includes('all') ? 'filter-button active' : 'filter-button'}
        onClick={() => handleFilterClick('all')}
      >
        All
      </button>
      <button
        className={selectedFilters.includes('category1') ? 'filter-button active' : 'filter-button'}
        onClick={() => handleFilterClick('category1')}
      >
        Category 1
      </button>
      <button
        className={selectedFilters.includes('category2') ? 'filter-button active' : 'filter-button'}
        onClick={() => handleFilterClick('category2')}
      >
        Category 2
      </button>
      <button
        className={selectedFilters.includes('category3') ? 'filter-button active' : 'filter-button'}
        onClick={() => handleFilterClick('category3')}
      >
        Category 3
      </button>

      <div id="products-list">
        {filteredProducts.length > 0 ? (
          <ul>
            {filteredProducts.map(product => (
              <li key={product.name}>{product.name}</li>
            ))}
          </ul>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default FilterButtonsBar;
