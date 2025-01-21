import React from 'react';
import Button from '../ui/Button';

export default function AddressForm() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-medium mb-4">Shipping Address</h2>
      
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-2 border rounded"
          />
        </div>
        
        <input
          type="text"
          placeholder="Address Line 1"
          className="w-full p-2 border rounded"
        />
        
        <input
          type="text"
          placeholder="Address Line 2 (Optional)"
          className="w-full p-2 border rounded"
        />
        
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="City"
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="State"
            className="p-2 border rounded"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="ZIP Code"
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="p-2 border rounded"
          />
        </div>
      </form>
    </div>
  );
}