import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ personal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Skills', 'Projects', 'Contact'];

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1.5rem 0',
        transition: 'all 0.3s ease',
        background: scrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* LOGO */}
        <div style={{ fontSize: '1.5rem', fontWeight: 700, cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="text-gradient">&lt;{personal.name.split(' ')[0]} /&gt;</span>
        </div>

        {/* DESKTOP NAV */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => (
            <span key={link} onClick={() => scrollTo(link)} style={{ cursor: 'pointer', fontWeight: 500, color: 'var(--text-secondary)', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
              {link}
            </span>
          ))}
          <a href={personal.resumeUrl} target="_blank" rel="noreferrer" style={{ padding: '0.5rem 1.2rem', background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))', borderRadius: '50px', fontWeight: 600, color: '#fff' }}>
            Resume
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="mobile-toggle" style={{ display: 'none', cursor: 'pointer' }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'var(--bg-secondary)', borderBottom: '1px solid var(--glass-border)', overflow: 'hidden' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', padding: '2rem', gap: '1.5rem', alignItems: 'center' }}>
              {navLinks.map((link) => (
                <span key={link} onClick={() => scrollTo(link)} style={{ fontSize: '1.2rem', fontWeight: 500 }}>
                  {link}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
