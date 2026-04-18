'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, { stiffness: 800, damping: 40, mass: 0.3 });
  const y = useSpring(mouseY, { stiffness: 800, damping: 40, mass: 0.3 });

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (isHidden) setIsHidden(false);
      const el = e.target;
      const interactive =
        el.tagName === 'A' || el.tagName === 'BUTTON' ||
        el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' ||
        el.closest('a') || el.closest('button') ||
        window.getComputedStyle(el).cursor === 'pointer';
      setIsPointer(!!interactive);
    };
    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', () => setIsHidden(true));
    document.addEventListener('mouseenter', () => setIsHidden(false));
    window.addEventListener('mousedown', () => setIsClicking(true));
    window.addEventListener('mouseup', () => setIsClicking(false));
    return () => window.removeEventListener('mousemove', onMove);
  }, [mouseX, mouseY, isHidden]);

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      animate={{ opacity: isHidden ? 0 : 1 }}
      transition={{ duration: 0.15 }}
    >
      <motion.div
        className="rounded-full bg-white mix-blend-difference"
        animate={{
          width: isClicking ? 8 : isPointer ? 20 : 12,
          height: isClicking ? 8 : isPointer ? 20 : 12,
        }}
        transition={{ duration: 0.12 }}
      />
    </motion.div>
  );
}
