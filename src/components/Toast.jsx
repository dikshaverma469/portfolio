import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

export default function Toast({ message, visible, onDismiss }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#161514] text-[#f5f1e8] border border-[#c1603e] px-4 py-3 shadow-2xl rounded-xs"
        >
          <span className="w-6 h-6 rounded-full bg-[#c1603e] flex items-center justify-center text-[#f5f1e8] shrink-0">
            <Check size={14} />
          </span>
          <div className="text-xs font-mono tracking-wider font-semibold uppercase">
            {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
