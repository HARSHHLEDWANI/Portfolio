'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Dot follows instantly
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 40, mass: 0.3 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 40, mass: 0.3 });

  // Ring follows with lag (trailing effect)
  const ringX = useSpring(mouseX, { stiffness: 200, damping: 28, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 200, damping: 28, mass: 0.6 });

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (isHidden) setIsHidden(false);

      const el = e.target;
      const isInteractive =
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        el.tagName === 'INPUT' ||
        el.tagName === 'TEXTAREA' ||
        el.closest('a') ||
        el.closest('button') ||
        window.getComputedStyle(el).cursor === 'pointer';
      setIsPointer(!!isInteractive);
    };

    const onLeave = () => setIsHidden(true);
    const onEnter = () => setIsHidden(false);
    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, [mouseX, mouseY, isHidden]);

  return (
    <div className="custom-cursor" aria-hidden>
      {/* Inner dot — mix-blend-mode for color inversion effect */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: isHidden ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      >
        <motion.div
          className="rounded-full bg-white mix-blend-difference"
          animate={{
            width: isClicking ? 6 : isPointer ? 8 : 6,
            height: isClicking ? 6 : isPointer ? 8 : 6,
          }}
          transition={{ duration: 0.12 }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: isHidden ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="rounded-full"
          animate={{
            width: isClicking ? 28 : isPointer ? 44 : 32,
            height: isClicking ? 28 : isPointer ? 44 : 32,
            borderColor: isPointer
              ? 'rgba(123,110,255,0.8)'
              : 'rgba(255,255,255,0.35)',
            backgroundColor: isPointer
              ? 'rgba(123,110,255,0.08)'
              : 'transparent',
          }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          style={{ border: '1.5px solid rgba(255,255,255,0.35)' }}
        />
      </motion.div>
    </div>
  );
}
