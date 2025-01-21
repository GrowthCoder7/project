import React, { useState } from 'react';
import { Product } from '../../types';
import Button from '../ui/Button';

interface ProductFormProps {
  product?: Product;
  onSubmit: (product: Partial<Product>) => Promise<void>;
}

export default function ProductForm({ product, onSubmit }: ProductFormProps) {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    price: product?.price || 0,
    description: product?.description || '',
    category: product?.category || '',
    images: product?.images || [''],
    scent: product?.scent || [''],
    burnTime: product?.burnTime || '',
    tags: product?.tags || [''],
    discount: product?.discount || 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      
      {/* Add other form fields */}
      
      <Button type="submit" variant="primary">
        {product ? 'Update Product' : 'Add Product'}
      </Button>
    </form>
  );
}