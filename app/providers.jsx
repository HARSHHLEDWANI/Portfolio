'use client';

import { AnimatePresence } from 'framer-motion';

export function Providers({ children }) {
  return (
    <AnimatePresence mode="wait">
      <div key="provider-wrapper">
        {children}
      </div>
    </AnimatePresence>
  );
}
