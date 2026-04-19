import React from 'react';
import { motion } from 'framer-motion';

const About = ({ personal, education }) => {
  return (
    <section id="about" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', justifyContent: 'space-between' }}>
          
          {/* Bio Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            style={{ flex: '1 1 500px' }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif' }}>
              Hi, I'm <span className="text-gradient">{personal.name}</span>
            </h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
              {personal.about}
            </p>
            
            <a 
              href={personal.resumeUrl} 
              target="_blank" 
              rel="noreferrer"
              style={{ 
                display: 'inline-block',
                padding: '0.8rem 2rem',
                background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
                borderRadius: '50px',
                color: '#fff',
                fontWeight: 600,
                boxShadow: 'var(--glow)',
                transition: 'transform var(--transition-fast)'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Download CV
            </a>
          </motion.div>

          {/* Education Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}>Education & Experience</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', borderLeft: '2px solid var(--accent-primary)', paddingLeft: '1.5rem', position: 'relative' }}>
              {education.map((item, idx) => (
                <div key={idx} style={{ position: 'relative' }}>
                  {/* Timeline Dot */}
                  <div style={{ position: 'absolute', left: '-29px', top: '0', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--bg-secondary)', border: '4px solid var(--accent-primary)' }}></div>
                  
                  <span style={{ fontSize: '0.9rem', color: 'var(--accent-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {item.period}
                  </span>
                  <h4 style={{ fontSize: '1.3rem', marginTop: '0.5rem', marginBottom: '0.2rem', color: 'var(--text-primary)' }}>{item.title}</h4>
                  <h5 style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '0.8rem' }}>{item.institution}</h5>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
