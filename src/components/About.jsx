import React from 'react';
import { motion } from 'framer-motion';

const About = ({ personal }) => {
  return (
    <section id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
            <div style={{ maxWidth: '800px', fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, textAlign: 'center' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Hello! I'm <span className="text-gradient" style={{ fontWeight: 600 }}>{personal.name}</span>, a dedicated {personal.role}.
              </p>
              <p>
                {personal.about}
              </p>
            </div>
            

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
