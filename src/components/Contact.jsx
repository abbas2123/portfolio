import React from 'react';
import { motion } from 'framer-motion';

const Contact = ({ personal }) => {
  return (
    <section id="contact" style={{ background: 'var(--bg-tertiary)', paddingBottom: '2rem' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel"
          style={{ padding: '5rem 2rem', borderRadius: '24px', textAlign: 'center', maxWidth: '800px', margin: '0 auto', position: 'relative', overflow: 'hidden' }}
        >
          {/* Internal Glow */}
          <div style={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)', width: '200px', height: '200px', background: 'var(--accent-primary)', filter: 'blur(100px)', borderRadius: '50%', opacity: 0.4 }}></div>

          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', position: 'relative', zIndex: 1, fontFamily: 'Outfit, sans-serif' }}>Get In Touch</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto', position: 'relative', zIndex: 1 }}>
            Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <a  
            href={`mailto:${personal.email}`}
            style={{ 
              display: 'inline-block', 
              padding: '1rem 2.5rem', 
              background: 'transparent',
              border: '2px solid var(--accent-primary)',
              color: 'var(--accent-primary)',
              borderRadius: '50px', 
              fontWeight: 600, 
              fontSize: '1.1rem',
              transition: 'all 0.3s ease',
              position: 'relative',
              zIndex: 1
            }}
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
        </motion.div>
        
        <footer style={{ marginTop: '5rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          <p>Designed & Built by {personal.name}</p>
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            {personal.socials.map((social, idx) => (
              <a key={idx} href={social.url} target="_blank" rel="noreferrer" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                {social.platform}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
