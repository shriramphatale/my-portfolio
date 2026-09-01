import React from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Toast({ toasts, onDismiss }) {
  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-3 pointer-events-none max-w-sm w-full">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            className="pointer-events-auto p-4 rounded-xl bg-zinc-950/95 border border-[#ef233c] shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(239,35,60,0.25)] backdrop-blur-xl flex items-start gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-[#ef233c] shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-white font-manrope truncate">
                {toast.title}
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5 break-words">
                {toast.message}
              </p>
            </div>
            <button
              onClick={() => onDismiss(toast.id)}
              className="text-zinc-500 hover:text-white transition-colors p-1"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
