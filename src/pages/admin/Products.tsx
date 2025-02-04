// src/components/admin/Products.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Product } from '../../types';
import api from '../../services/api';
import ProductForm from '../../components/admin/ProductForm';

export default function Products() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/login');
      return;
    }
    fetchProducts();
  }, [user, navigate]);

  const fetchProducts = async () => {
    try {
      const { data } = await api.get('/products');
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  const handleAddProduct = async (product: Partial<Product>) => {
    try {
      await api.post('/products', product);
      setIsAddingProduct(false);
      fetchProducts();
    } catch (error) {
      console.error("Failed to add product", error);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-serif mb-8">Manage Products</h1>
        {isAddingProduct ? (
          <ProductForm onSubmit={handleAddProduct} />
        ) : (
          <button
            onClick={() => setIsAddingProduct(true)}
            className="bg-neutral-900 text-white px-4 py-2 rounded-md"
          >
            Add New Product
          </button>
        )}
        {/* You can also list the products here, if needed */}
      </div>
    </div>
  );
}
