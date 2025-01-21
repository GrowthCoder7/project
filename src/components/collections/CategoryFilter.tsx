import React from 'react';
import { categories } from '../../data/categories';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="mb-8">
      <h3 className="font-medium mb-4">Categories</h3>
      <div className="space-y-2">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="category"
            checked={selectedCategory === ''}
            onChange={() => onCategoryChange('')}
            className="text-neutral-900"
          />
          <span className="text-sm">All Categories</span>
        </label>
        {categories.map((category) => (
          <label key={category.id} className="flex items-center gap-2">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === category.id}
              onChange={() => onCategoryChange(category.id)}
              className="text-neutral-900"
            />
            <span className="text-sm">{category.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
}