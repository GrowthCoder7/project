import React, { useState } from 'react';
import { X, Search as SearchIcon } from 'lucide-react';
import { products } from '../../data/products';
import { Product } from '../../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description?.toLowerCase().includes(query.toLowerCase()) ||
      product.category?.toLowerCase().includes(query.toLowerCase()) ||
      product.scent?.some(s => s.toLowerCase().includes(query.toLowerCase()))
    );
    setResults(filtered);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50">
      <div className="fixed inset-x-0 top-0 bg-white p-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <SearchIcon className="w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="flex-1 bg-transparent text-lg focus:outline-none"
              autoFocus
            />
            <button onClick={onClose}>
              <X className="w-5 h-5 text-neutral-400" />
            </button>
          </div>

          <div className="max-h-[70vh] overflow-y-auto">
            {results.map((product) => (
              <div key={product.id} className="flex items-center gap-4 p-4 hover:bg-neutral-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-sm text-neutral-600">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}