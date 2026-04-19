import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ skills }) => {
  return (
    <section id="skills" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      {/* Aesthetic blur behind skills */}
      <div style={{ position: 'absolute', top: '50%', right: '0', width: '400px', height: '400px', background: 'var(--accent-tertiary)', filter: 'blur(200px)', borderRadius: '50%', opacity: 0.1, zIndex: 0 }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">My Skills</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{skill.name}</span>
                <span style={{ color: 'var(--text-secondary)' }}>{skill.level}%</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'var(--bg-tertiary)', borderRadius: '4px', overflow: 'hidden' }}>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + (index * 0.1), ease: "easeOut" }}
                  style={{ height: '100%', background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))', borderRadius: '4px' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
