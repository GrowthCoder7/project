import React, { useState, useRef, useEffect } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { searchProducts } from '../../utils/searchUtils';
import { products } from '../../data/products';
import { Product } from '../../types';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<Product[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    const searchResults = searchProducts(searchQuery, products);
    setResults(searchResults);
    setIsOpen(searchQuery.length > 0);
  };

  const handleProductClick = (product: Product) => {
    setIsOpen(false);
    navigate(`/product/${product.id}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/collections?search=${encodeURIComponent(query)}`);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative flex-1 max-w-2xl mx-auto" ref={searchRef}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search for products..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-200 focus:border-neutral-400 focus:ring-2 focus:ring-neutral-200 transition-colors"
          />
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
        </div>
      </form>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-neutral-200 max-h-96 overflow-y-auto z-50">
          {results.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-4 p-4 hover:bg-neutral-50 cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-neutral-600">${product.price}</p>
                {product.category && (
                  <p className="text-xs text-neutral-500">{product.category}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}