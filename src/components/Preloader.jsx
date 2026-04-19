import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#0a0a0c',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Background Glow */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          background: 'var(--accent-primary)',
          filter: 'blur(150px)',
          borderRadius: '50%',
          zIndex: 0
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Profile Image Pulse */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ marginBottom: '2rem' }}
        >
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            border: '3px solid var(--accent-primary)',
            padding: '5px',
            background: 'var(--bg-primary)',
            margin: '0 auto',
            overflow: 'hidden',
            boxShadow: '0 0 30px var(--accent-primary)'
          }}>
            <img 
              src="./profile.jpg" 
              alt="Muhammed Abbas" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            />
          </div>
        </motion.div>

        {/* Name Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontFamily: 'Outfit, sans-serif', 
            fontWeight: 700,
            letterSpacing: '2px',
            marginBottom: '0.5rem'
          }}>
            MUHAMMED <span className="text-gradient">ABBAS</span>
          </h1>
          
          <div style={{ 
            width: '0%', 
            height: '2px', 
            background: 'linear-gradient(to right, transparent, var(--accent-primary), transparent)', 
            margin: '1rem auto'
          }}>
            <motion.div 
              animate={{ width: '100%' }}
              transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
              style={{ height: '100%', background: 'inherit' }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1rem', 
              textTransform: 'uppercase', 
              letterSpacing: '4px' 
            }}
          >
            Developing Excellence
          </motion.p>
        </motion.div>
      </div>

      {/* Modern Wave Reveal Elements */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: '100%' }}
        exit={{ y: '0%' }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'var(--accent-primary)',
          zIndex: 2
        }}
      />
    </motion.div>
  );
};

export default Preloader;
