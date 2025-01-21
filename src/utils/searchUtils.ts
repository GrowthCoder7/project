import { Product } from '../types';

export const searchProducts = (query: string, products: Product[]): Product[] => {
  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
  
  if (searchTerms.length === 0) return [];

  return products.filter((product) => {
    const searchableText = [
      product.name,
      product.description,
      product.category,
      ...(product.scent || [])
    ].join(' ').toLowerCase();

    return searchTerms.every(term => searchableText.includes(term));
  });
};