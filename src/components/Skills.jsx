import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ skills }) => {
  const categories = Object.keys(skills);

  return (
    <section id="skills" style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: '10%', left: '0', width: '400px', height: '400px', background: 'var(--accent-tertiary)', filter: 'blur(200px)', borderRadius: '50%', opacity: 0.1, zIndex: 0 }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">Technical Skills</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
          {categories.map((category, index) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel"
              style={{ padding: '2rem', borderRadius: '16px' }}
            >
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif' }}>
                {category}
              </h3>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {skills[category].map((skill, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(139, 92, 246, 0.2)', backgroundColor: 'rgba(139, 92, 246, 0.15)', borderColor: 'var(--accent-primary)' }}
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid var(--border-color)',
                      padding: '0.6rem 1.2rem',
                      borderRadius: '8px',
                      color: 'var(--text-secondary)',
                      fontSize: '1rem',
                      fontWeight: 500,
                      transition: 'all 0.3s ease',
                      cursor: 'default'
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
