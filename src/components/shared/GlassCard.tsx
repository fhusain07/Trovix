import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}
export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '',
  hover = true 
}) => {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      transition={{ duration: 0.2 }}
      className={cn(
        "glass-effect rounded-xl p-6 transition-all",
        hover && "hover:shadow-xl hover:glow-effect cursor-pointer",
        className
      )}
    >
      {children}
    </motion.div>
  );
};