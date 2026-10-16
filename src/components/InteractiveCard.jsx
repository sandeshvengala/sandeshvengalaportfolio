import { motion } from 'framer-motion';
import { useState } from 'react';

export default function InteractiveCard({
  children,
  className = '',
  glowColor = 'rgba(251,191,36,0.16)',
  glowSize = 220,
  ...motionProps
}) {
  const [pointer, setPointer] = useState({ x: '50%', y: '50%', active: false });

  const setPointerFromEvent = (clientX, clientY, target) => {
    const rect = target.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    setPointer({ x: `${x}px`, y: `${y}px`, active: true });
  };

  const handleMouseMove = (event) => {
    setPointerFromEvent(event.clientX, event.clientY, event.currentTarget);
  };

  const handleTouchMove = (event) => {
    const touch = event.touches[0];
    if (!touch) return;
    setPointerFromEvent(touch.clientX, touch.clientY, event.currentTarget);
  };

  const resetPointer = () => {
    setPointer((prev) => ({ ...prev, active: false }));
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPointer}
      onTouchStart={handleTouchMove}
      onTouchMove={handleTouchMove}
      onTouchEnd={resetPointer}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.995 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`group relative overflow-hidden ${className}`}
      style={{
        backgroundImage: pointer.active
          ? `radial-gradient(${glowSize}px circle at ${pointer.x} ${pointer.y}, ${glowColor}, transparent 58%)`
          : undefined
      }}
      {...motionProps}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100 bg-gradient-to-br from-white/20 to-transparent dark:from-paper/5" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
