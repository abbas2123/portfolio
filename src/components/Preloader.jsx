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
    <motion.div className="preloader">
      <div className="preloader-grid" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
      >
        <div className="preloader-visual">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: "linear" }}
              className="preloader-ring"
              style={{
                inset: i * 15,
                borderColor: i === 0 ? 'var(--accent-primary)' : 'rgba(139, 92, 246, 0.2)',
                borderTopColor: 'transparent',
                borderBottomColor: 'transparent'
              }}
            />
          ))}

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="preloader-avatar"
          >
            <img src="./profile.jpg" alt="Muhammed Abbas" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            <motion.div
              animate={{ top: ['-10%', '110%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="preloader-scanline"
            />
          </motion.div>
        </div>

        <div className="preloader-text">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="preloader-name">
            MUHAMMED <span className="text-gradient">ABBAS</span>
          </motion.h1>

          <AnimatePresence mode="wait">
            <motion.p
              key={msgIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="preloader-msg"
            >
              {`> ${messages[msgIndex]}`}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>

      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: '-100%' }}
          exit={{ x: '100%', transition: { duration: 0.8, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] } }}
          style={{
            position: 'absolute', top: `${i * 20}%`, left: 0, width: '100%', height: '20%',
            background: i % 2 === 0 ? 'var(--bg-primary)' : 'var(--bg-secondary)',
            zIndex: 10, borderBottom: '1px solid rgba(255,255,255,0.02)'
          }}
        />
      ))}

      <style>{`
        .preloader{position:fixed;inset:0;z-index:9999;background:#0a0a0c;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;color:#fff}
        .preloader-grid{position:absolute;inset:0;background-image:radial-gradient(circle at 2px 2px,rgba(139,92,246,.05) 1px,transparent 0);background-size:40px 40px;opacity:.5}
        .preloader-visual{position:relative;width:200px;height:200px;margin:0 auto 3rem auto}
        .preloader-ring{position:absolute;border-radius:50%;border:1px solid}
        .preloader-avatar{position:absolute;inset:45px;border-radius:50%;border:3px solid var(--accent-primary);padding:6px;background:var(--bg-primary);overflow:hidden;box-shadow:0 0 40px rgba(139,92,246,.4)}
        .preloader-scanline{position:absolute;left:0;width:100%;height:2px;background:rgba(139,92,246,.8);box-shadow:0 0 10px var(--accent-primary);z-index:3}
        .preloader-text{min-height:120px}
        .preloader-name{font-size:2rem;font-family:Outfit,sans-serif;font-weight:800;letter-spacing:5px;margin-bottom:1rem;text-transform:uppercase}
        .preloader-msg{color:var(--accent-secondary);font-size:.85rem;font-family:monospace;letter-spacing:2px}

        @media(max-width:768px){
          .preloader-visual{width:150px;height:150px;margin-bottom:2rem}
          .preloader-avatar{inset:35px}
          .preloader-name{font-size:1.5rem;letter-spacing:3px}
          .preloader-msg{font-size:.75rem;letter-spacing:1px}
          .preloader-text{min-height:90px}
        }
        @media(max-width:480px){
          .preloader-visual{width:120px;height:120px;margin-bottom:1.5rem}
          .preloader-avatar{inset:28px;padding:4px;border-width:2px}
          .preloader-name{font-size:1.2rem;letter-spacing:2px}
          .preloader-msg{font-size:.7rem;letter-spacing:1px}
          .preloader-text{min-height:70px}
        }
      `}</style>
    </motion.div>
  );
};

export default Preloader;
