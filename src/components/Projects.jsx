import React from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';

const Projects = ({ projects }) => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel"
              style={{ borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.4)', borderColor: 'var(--accent-primary)' }}
            >
              <div style={{ width: '100%', height: '200px', overflow: 'hidden', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'var(--accent-primary)', opacity: 0.2, zIndex: 1, mixBlendMode: 'overlay', pointerEvents: 'none' }}></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6, flexGrow: 1 }}>
                  {project.description}
                </p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '2rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)', background: 'rgba(59, 130, 246, 0.1)', padding: '0.4rem 0.8rem', borderRadius: '50px', fontWeight: 500 }}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div style={{ display: 'flex', gap: '1.2rem', marginTop: 'auto' }}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600, transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
                      <Code size={20} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600, transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
                      <ExternalLink size={20} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
