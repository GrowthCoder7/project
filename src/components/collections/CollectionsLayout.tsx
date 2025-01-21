import React from 'react';
import { SlidersHorizontal } from 'lucide-react';
import CategoryFilter from './CategoryFilter';
import TagsFilter from './TagsFilter';
import ProductGrid from './ProductGrid';
import { Product } from '../../types';

interface CollectionsLayoutProps {
  products: Product[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  showFilters: boolean;
  onToggleFilters: () => void;
}

export default function CollectionsLayout({
  products,
  selectedCategory,
  onCategoryChange,
  selectedTags,
  onTagToggle,
  showFilters,
  onToggleFilters
}: CollectionsLayoutProps) {
  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-serif">Our Collection</h1>
          <button
            onClick={onToggleFilters}
            className="flex items-center gap-2 sm:hidden"
          >
            <SlidersHorizontal className="w-5 h-5" />
            Filters
          </button>
        </div>

        <div className="flex gap-8">
          <div className={`${showFilters ? 'block' : 'hidden'} sm:block w-64 flex-shrink-0`}>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <CategoryFilter
                selectedCategory={selectedCategory}
                onCategoryChange={onCategoryChange}
              />
              <TagsFilter
                selectedTags={selectedTags}
                onTagToggle={onTagToggle}
              />
            </div>
          </div>

          <div className="flex-1">
            <ProductGrid products={products} />
          </div>
        </div>
      </div>
    </div>
  );
}