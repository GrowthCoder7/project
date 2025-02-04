// src/components/admin/Dashboard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user || user.role !== 'admin') {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen pt-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-serif mb-8">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-medium mb-4">Products</h2>
            <button 
              onClick={() => navigate('/admin/products')}
              className="text-neutral-600 hover:text-neutral-900"
            >
              Manage Products →
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-medium mb-4">Orders</h2>
            <button 
              onClick={() => navigate('/admin/orders')}
              className="text-neutral-600 hover:text-neutral-900"
            >
              View Orders →
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-medium mb-4">Customers</h2>
            <p className="text-neutral-600">Customer management</p>
          </div>
        </div>
      </div>
    </div>
  );
}
