import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './store';
 

function Chocolate({ searchTerm = "" }) {
  const dispatch = useDispatch();
  const chocolateItems = useSelector(state => state.products?.chocolate || []);

  const [priceRange, setPriceRange] = useState(1000);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter products based on search and price
  const filteredItems = chocolateItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    item.price <= priceRange
  );

  // Pagination logic
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setCurrentPage(1); // Reset page when filters change
  }, [searchTerm, priceRange]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleClearFilters = () => {
    setPriceRange(1000);
  };

  return (
    <div className="page">
      <h2>🍫 Chocolate</h2>

      {/* Price Filter */}
      <div className="price-filter">
        <label>
          Price Range: ₹0 - ₹{priceRange}
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
          />
        </label>
        <button onClick={handleClearFilters} className="clear-button">
          Clear Filters
        </button>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {currentItems.length > 0 ? (
          currentItems.map((item, index) => (
            <div className="card" key={item.id || `${item.name}-${index}`}>
              <img
                src={item.image}
                alt={item.name}
                className="product-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/default-chocolate.jpg'; // fallback image
                }}
              />
              <h3>{item.name}</h3>
              <p>₹{item.price.toFixed(2)}</p>
              <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No matching chocolates found.</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx + 1}
              onClick={() => handlePageChange(idx + 1)}
              className={currentPage === idx + 1 ? 'active' : ''}
            >
              {idx + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Chocolate;
