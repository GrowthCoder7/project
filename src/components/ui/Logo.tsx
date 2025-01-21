import React from 'react';
import { Flame } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Flame className="w-6 h-6 text-neutral-900" />
      <span className="font-serif text-2xl">Candlings</span>
    </div>
  );
}