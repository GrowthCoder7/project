import React, { useState } from 'react';
import { useNewsletterSubscribe } from '../../hooks/useNewsletterSubscribe';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const { subscribe, status, error } = useNewsletterSubscribe();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await subscribe(email);
    if (status === 'success') {
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <div className="flex-1">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full bg-neutral-800 px-4 py-2 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-neutral-700"
          required
        />
        {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
        {status === 'success' && (
          <p className="text-green-400 text-sm mt-1">Successfully subscribed!</p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-white text-neutral-900 px-6 py-2 rounded-full hover:bg-neutral-100 transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </button>
    </form>
  );
}