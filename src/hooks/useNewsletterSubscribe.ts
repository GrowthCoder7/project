import { useState } from 'react';

type SubscribeStatus = 'idle' | 'loading' | 'success' | 'error';

export function useNewsletterSubscribe() {
  const [status, setStatus] = useState<SubscribeStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const subscribe = async (email: string) => {
    setStatus('loading');
    setError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
      setStatus('error');
    }
  };

  return { subscribe, status, error };
}