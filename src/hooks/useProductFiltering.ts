import { useState, useEffect } from 'react';
import { Product } from '../types';
import { searchProducts } from '../utils/searchUtils';

interface UseProductFilteringProps {
  products: Product[];
  searchQuery: string;
  selectedCategory: string;
  selectedTags: string[];
}

export function useProductFiltering({ 
  products, 
  searchQuery, 
  selectedCategory,
  selectedTags
}: UseProductFilteringProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    let filtered = searchQuery ? searchProducts(searchQuery, products) : products;

    if (selectedCategory) {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter(p => 
        selectedTags.every(tag => p.tags?.includes(tag))
      );
    }

    setFilteredProducts(filtered);
  }, [products, searchQuery, selectedCategory, selectedTags]);

  return filteredProducts;
}