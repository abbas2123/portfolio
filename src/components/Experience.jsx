import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Experience = ({ experience }) => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-orb" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="experience-sub">
            My professional journey and real-world development experience.
          </p>
        </motion.div>

        <div className="experience-timeline">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="experience-card"
            >
              <div className="experience-header">
                <h3 className="experience-role">{item.role}</h3>
                <span className="experience-duration">{item.duration}</span>
              </div>
              <h4 className="experience-company">{item.company}</h4>

              {item.tech && (
                <div className="experience-tech">
                  {item.tech.map((tech, i) => (
                    <span key={i} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <ul className="experience-list">
                {item.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .experience-section { position: relative; overflow: hidden; padding: 8rem 0; }
        .experience-orb { position: absolute; top: 20%; left: -5%; width: 500px; height: 500px; background: var(--accent-primary); filter: blur(200px); border-radius: 50%; opacity: 0.1; z-index: 0; }
        .experience-sub { color: var(--text-secondary); max-width: 600px; margin: 0 auto; font-size: 1.1rem; }
        .experience-timeline { max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; gap: 2rem; }
        .experience-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 2.5rem;
          backdrop-filter: blur(12px);
          transition: border-color 0.4s ease, transform 0.4s ease;
        }
        .experience-card:hover {
          border-color: rgba(139, 92, 246, 0.3);
          transform: translateY(-5px);
        }
        .experience-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 1rem; }
        .experience-role { font-size: 1.6rem; font-weight: 700; color: #fff; font-family: Outfit, sans-serif; }
        .experience-duration { color: var(--text-secondary); font-size: 0.95rem; font-weight: 500; background: rgba(255, 255, 255, 0.05); padding: 0.4rem 1rem; border-radius: 20px; }
        .experience-company { color: var(--accent-primary); font-size: 1.2rem; margin-bottom: 1.5rem; font-weight: 600; }
        .experience-tech { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.5rem; }
        .tech-pill { padding: 0.5rem 1rem; border-radius: 999px; background: rgba(139, 92, 246, 0.1); color: var(--accent-secondary); border: 1px solid rgba(139, 92, 246, 0.2); font-size: 0.85rem; font-weight: 500; }
        .experience-list { padding-left: 1.2rem; line-height: 1.8; color: var(--text-secondary); }
        .experience-list li { margin-bottom: 0.8rem; }
        .experience-list li:last-child { margin-bottom: 0; }
        @media(max-width: 768px) {
          .experience-section { padding: 5rem 0; }
          .experience-orb { width: 300px; height: 300px; }
          .experience-card { padding: 1.5rem; border-radius: 16px; }
          .experience-role { font-size: 1.3rem; }
          .experience-company { font-size: 1.1rem; margin-bottom: 1rem; }
          .experience-tech { gap: 0.5rem; margin-bottom: 1rem; }
          .tech-pill { padding: 0.4rem 0.8rem; font-size: 0.8rem; }
          .experience-list { font-size: 0.95rem; }
          .experience-header { flex-direction: column; gap: 0.5rem; }
        }
      `}</style>
    </section>
  );
};

export default Experience;