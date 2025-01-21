import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

export default function CartAnimation() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.3 }}
      >
        <ShoppingCart className="w-5 h-5" />
      </motion.div>
    </AnimatePresence>
  );
}