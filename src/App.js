import React, { useEffect, useState } from 'react';
import './style.css';
// import itm from './items.js'

const itm = [
  {
    name: 'Prada',
    category: 'Bags',
  },
  {
    name: 'Gucci',
    category: 'Bags',
  },
  {
    name: 'Guess',
    category: 'Bags',
  },
  {
    name: 'Rolex',
    category: 'Watches',
  },
  {
    name: 'Timex',
    category: 'Watches',
  },
  {
    name: 'Nike',
    category: 'Sports',
  },
  {
    name: 'Adidas',
    category: 'Sports',
  },
  {
    name: 'Fila',
    category: 'Sports',
  },
  {
    name: 'Ray Ban',
    category: 'Sunglasses',
  },
  {
    name: 'Aldo',
    category: 'Sunglasses',
  },
  {
    name: 'Polaroid',
    category: 'Sunglasses',
  },
];

const App = () => {
  const [selectfilt, setselectfilt] = useState('all');
  const [filtprod, setfiltprod] = useState(itm);

  // -==============

  const handleFilterClick = (filter) => {
    if (filter === selectfilt) return;
    setselectfilt(filter);
    const filtered =
      filter === 'all'
        ? itm
        : itm.filter((product) => product.category === filter);

    setfiltprod(filtered);
  };
  // =================
  return (
    <div id="filters-bar">
      <button
        className={
          selectfilt === 'Bags' ? 'filter-button active' : 'filter-button'
        }
        onClick={() => handleFilterClick('Bags')}
      >
        Bags
      </button>
      <button
        className={
          selectfilt === 'Watches'
            ? 'filter-button active'
            : 'filter-button'
        }
        onClick={() => handleFilterClick('Watches')}
      >
        Watches
      </button>
      <button
        className={
          selectfilt === 'Sports' ? 'filter-button active' : 'filter-button'
        }
        onClick={() => handleFilterClick('Sports')}
      >
        Sports
      </button>
      <button
        className={
          selectfilt === 'Sunglasses'
            ? 'filter-button active'
            : 'filter-button'
        }
        onClick={() => handleFilterClick('Sunglasses')}
      >
        Sunglasses
      </button>

      <div id="products-list">
        {filtprod.length && (
          <ul className="items-container">
            {filtprod.map((product) => (
              <li className="item" key={product.name}>
                {product.name}
               <div class='category'> {product.category}
                 </div>
                
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
