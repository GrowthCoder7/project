import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function WishlistAnimation() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.3, type: 'spring' }}
      >
        <Heart className="w-5 h-5 text-red-700" />
      </motion.div>
    </AnimatePresence>
  );
}