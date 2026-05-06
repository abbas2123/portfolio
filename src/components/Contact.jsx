import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const Contact = ({ personal }) => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel contact-card"
        >
          <div className="contact-glow" />
          <h2 className="contact-heading">Get In Touch</h2>
          <p className="contact-text">
            {personal.contactMessage}
          </p>
          
          <Magnetic strength={0.25}>
            <a  
              href={`mailto:${personal.email}`}
              className="contact-btn"
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                e.currentTarget.style.boxShadow = 'var(--glow)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Say Hello
            </a>
          </Magnetic>
        </motion.div>
        
        <footer className="contact-footer">
          <p>Designed & Built by {personal.name}</p>
          <div className="contact-footer-links">
            {personal.socials.map((social, idx) => (
              <a key={idx} href={social.url} target="_blank" rel="noreferrer" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                {social.platform}
              </a>
            ))}
          </div>
        </footer>
      </div>

      <style>{`
        .contact-section{background:var(--bg-tertiary);padding-bottom:2rem}
        .contact-card{padding:5rem 2rem;border-radius:24px;text-align:center;max-width:800px;margin:0 auto;position:relative;overflow:hidden}
        .contact-glow{position:absolute;top:-50%;left:50%;transform:translateX(-50%);width:200px;height:200px;background:var(--accent-primary);filter:blur(100px);border-radius:50%;opacity:.4}
        .contact-heading{font-size:3rem;margin-bottom:1.5rem;position:relative;z-index:1;font-family:Outfit,sans-serif}
        .contact-text{color:var(--text-secondary);font-size:1.1rem;margin-bottom:3rem;max-width:600px;margin-left:auto;margin-right:auto;position:relative;z-index:1}
        .contact-btn{display:inline-block;padding:1rem 2.5rem;background:transparent;border:2px solid var(--accent-primary);color:var(--accent-primary);border-radius:50px;font-weight:600;font-size:1.1rem;transition:all .3s ease;position:relative;z-index:1}
        .contact-footer{margin-top:5rem;text-align:center;color:var(--text-muted);font-size:.9rem}
        .contact-footer-links{margin-top:1rem;display:flex;justify-content:center;gap:1.5rem;flex-wrap:wrap}

        @media(max-width:768px){
          .contact-card{padding:3rem 1.5rem;border-radius:16px}
          .contact-heading{font-size:2rem;margin-bottom:1rem}
          .contact-text{font-size:1rem;margin-bottom:2rem}
          .contact-btn{padding:.8rem 2rem;font-size:1rem}
          .contact-footer{margin-top:3rem}
          .contact-footer-links{gap:1rem}
          .contact-glow{width:150px;height:150px}
        }
        @media(max-width:480px){
          .contact-card{padding:2.5rem 1rem;border-radius:12px}
          .contact-heading{font-size:1.6rem}
          .contact-text{font-size:.9rem;margin-bottom:1.5rem}
          .contact-btn{padding:.7rem 1.5rem;font-size:.95rem}
          .contact-footer{margin-top:2.5rem;font-size:.8rem}
          .contact-footer-links{gap:.8rem;font-size:.8rem}
        }
      `}</style>
    </section>
  );
};

export default Contact;
