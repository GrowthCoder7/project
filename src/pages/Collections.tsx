// import React, { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { products } from '../data/products';
// import { useProductFiltering } from '../hooks/useProductFiltering';
// import CollectionsLayout from '../components/collections/CollectionsLayout';

// export default function Collections() {
//   const [searchParams] = useSearchParams();
//   const [selectedCategory, setSelectedCategory] = useState<string>('');
//   const [selectedTags, setSelectedTags] = useState<string[]>([]);
//   const [showFilters, setShowFilters] = useState(false);

//   // Retrieve the `category` from the query parameters
//   const categoryQuery = searchParams.get('category') || '';
//   const searchQuery = searchParams.get('search') || '';

//   useEffect(() => {
//     // Automatically set the selected category based on the query parameter
//     if (categoryQuery) {
//       setSelectedCategory(categoryQuery);
//     }
//   }, [categoryQuery]);

//   const handleTagToggle = (tag: string) => {
//     setSelectedTags((prev) =>
//       prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
//     );
//   };

//   const filteredProducts = useProductFiltering({
//     products,
//     searchQuery,
//     selectedCategory,
//     selectedTags,
//   });

//   return (
//     <CollectionsLayout
//       products={filteredProducts}
//       selectedCategory={selectedCategory}
//       onCategoryChange={setSelectedCategory}
//       selectedTags={selectedTags}
//       onTagToggle={handleTagToggle}
//       showFilters={showFilters}
//       onToggleFilters={() => setShowFilters(!showFilters)}
//     />
//   );
// }

import React, { useEffect, useState,useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { useProductFiltering } from '../hooks/useProductFiltering';
import CollectionsLayout from '../components/collections/CollectionsLayout';

export default function Collections() {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Get valid categories from products
  const validCategories = useMemo(() => 
    Array.from(new Set(products.map(p => p.category))), 
    [products]
  );

  // Sync URL parameter with state
  useEffect(() => {
    const categoryParam = searchParams.get('category') || '';
    const isValidCategory = validCategories.includes(categoryParam);
    
    setSelectedCategory(isValidCategory ? categoryParam : '');
    setSelectedTags([]);
    window.scrollTo(0, 0);
  }, [searchParams, validCategories]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredProducts = useProductFiltering({
    products,
    searchQuery: searchParams.get('search') || '',
    selectedCategory,
    selectedTags,
  });

  return (
    <CollectionsLayout
      products={filteredProducts}
      selectedCategory={selectedCategory}
      onCategoryChange={(newCategory: string) => {
        setSelectedCategory(newCategory);
        setSelectedTags([]);
      }}
      selectedTags={selectedTags}
      onTagToggle={handleTagToggle}
      showFilters={showFilters}
      onToggleFilters={() => setShowFilters(!showFilters)}
    />
  );
}