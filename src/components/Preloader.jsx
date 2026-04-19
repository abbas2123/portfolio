import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  "INITIALIZING MERN SYSTEM...",
  "LOADING CORE MODULES...",
  "SYNCING PROJECT DATA...",
  "COMPILE SUCCESSFUL",
  "IDENTITY VERIFIED",
  "WELCOME MUHAMMED ABBAS"
];

const Preloader = () => {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    if (msgIndex < messages.length - 1) {
      const timer = setTimeout(() => setMsgIndex(msgIndex + 1), 400);
      return () => clearTimeout(timer);
    }
  }, [msgIndex]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#0a0a0c',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        color: '#fff'
      }}
    >
      {/* Background Grid for Tech Feel */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.05) 1px, transparent 0)',
        backgroundSize: '40px 40px',
        opacity: 0.5
      }} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
      >
        {/* Central Visual Complex */}
        <div style={{ position: 'relative', width: '200px', height: '200px', margin: '0 auto 3rem auto' }}>
          
          {/* Spinning Outer Rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: "linear" }}
              style={{
                position: 'absolute',
                inset: i * 15,
                borderRadius: '50%',
                border: `1px solid ${i === 0 ? 'var(--accent-primary)' : 'rgba(139, 92, 246, 0.2)'}`,
                borderTopColor: 'transparent',
                borderBottomColor: 'transparent'
              }}
            />
          ))}

          {/* Profile Circle with Scanline */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            style={{
              position: 'absolute',
              inset: 45,
              borderRadius: '50%',
              border: '3px solid var(--accent-primary)',
              padding: '6px',
              background: 'var(--bg-primary)',
              overflow: 'hidden',
              boxShadow: '0 0 40px rgba(139, 92, 246, 0.4)'
            }}
          >
            <img 
              src="./profile.jpg" 
              alt="Muhammed Abbas" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            />
            {/* Scanline Animation */}
            <motion.div
              animate={{ top: ['-10%', '110%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              style={{
                position: 'absolute',
                left: 0,
                width: '100%',
                height: '2px',
                background: 'rgba(139, 92, 246, 0.8)',
                boxShadow: '0 0 10px var(--accent-primary)',
                zIndex: 3
              }}
            />
          </motion.div>
        </div>

        {/* Text Area */}
        <div style={{ minHeight: '120px' }}>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ 
              fontSize: '2rem', 
              fontFamily: 'Outfit, sans-serif', 
              fontWeight: 800,
              letterSpacing: '5px',
              marginBottom: '1rem',
              textTransform: 'uppercase'
            }}
          >
            MUHAMMED <span className="text-gradient">ABBAS</span>
          </motion.h1>

          <AnimatePresence mode="wait">
            <motion.p
              key={msgIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              style={{ 
                color: 'var(--accent-secondary)', 
                fontSize: '0.85rem', 
                fontFamily: 'monospace',
                letterSpacing: '2px'
              }}
            >
              {`> ${messages[msgIndex]}`}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Shutter Exit Panels */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: '-100%' }}
          exit={{ 
            x: '100%',
            transition: { duration: 0.8, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] } 
          }}
          style={{
            position: 'absolute',
            top: `${i * 20}%`,
            left: 0,
            width: '100%',
            height: '20%',
            background: i % 2 === 0 ? 'var(--bg-primary)' : 'var(--bg-secondary)',
            zIndex: 10,
            borderBottom: '1px solid rgba(255,255,255,0.02)'
          }}
        />
      ))}
    </motion.div>
  );
};

export default Preloader;
