import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = () => setIsHovering(true);
    const handleUnhover = () => setIsHovering(false);

    window.addEventListener('mousemove', moveCursor);
    
    // Select all interactive elements
    const targets = document.querySelectorAll('a, button, .skill-pill, .tilt-element');
    targets.forEach(target => {
      target.addEventListener('mouseenter', handleHover);
      target.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      targets.forEach(target => {
        target.removeEventListener('mouseenter', handleHover);
        target.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);

  return (
    <>
      <style>{`
        body, a, button {
          cursor: none !important;
        }
        @media (max-width: 768px) {
          body, a, button { cursor: auto !important; }
          .custom-cursor { display: none; }
        }
      `}</style>
      
      {/* Main Dot */}
      <motion.div
        className="custom-cursor"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '8px',
          height: '8px',
          backgroundColor: '#fff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Trailing Glow Ring */}
      <motion.div
        className="custom-cursor"
        animate={{
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '40px',
          height: '40px',
          border: '1px solid var(--accent-primary)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          background: isHovering ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
          boxShadow: isHovering ? '0 0 20px var(--accent-primary)' : 'none',
        }}
      />
    </>
  );
};

export default CustomCursor;
