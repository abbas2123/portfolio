import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

// Icons

import { FaJava as FaJavaIcon, FaDatabase as FaDatabaseIcon, FaCode as FaCodeIcon, FaHtml5, FaCss3Alt, FaAws } from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiCplusplus,
  SiReact, SiRedux, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiFirebase,
  SiGit, SiDocker, SiNginx, SiFigma, SiPostman
} from 'react-icons/si';

const getIcon = (skillName) => {
  switch (skillName) {
    case 'JavaScript': return <SiJavascript color="#F7DF1E" />;
    case 'TypeScript': return <SiTypescript color="#3178C6" />;
    case 'HTML5': return <FaHtml5 color="#E34F26" />;
    case 'CSS3': return <FaCss3Alt color="#1572B6" />;
    case 'C++': return <SiCplusplus color="#00599C" />;
    case 'Java': return <FaJavaIcon color="#b07219" />;
    case 'SQL / NoSQL': return <FaDatabaseIcon color="#336791" />;
    
    case 'React': return <SiReact color="#61DAFB" />;
    case 'Redux': return <SiRedux color="#764ABC" />;
    case 'Tailwind CSS': return <SiTailwindcss color="#06B6D4" />;
    case 'Bootstrap': return <SiBootstrap color="#7952B3" />;
    case 'EJS': return <FaCodeIcon color="#a1cf36" />;
    
    case 'Node.js': return <SiNodedotjs color="#339933" />;
    case 'Express.js': return <SiExpress color="#FFF" />;
    case 'MongoDB': return <SiMongodb color="#47A248" />;
    case 'PostgreSQL': return <SiPostgresql color="#336791" />;
    case 'Firebase': return <SiFirebase color="#FFCA28" />;
    
    case 'Git': return <SiGit color="#F05032" />;
    case 'Docker': return <SiDocker color="#2496ED" />;
    case 'AWS': return <FaAws color="#232F3E" />;
    case 'Nginx': return <SiNginx color="#009639" />;
    case 'Figma': return <SiFigma color="#F24E1E" />;
    case 'Postman': return <SiPostman color="#FF6C37" />;
    
    default: return <div style={{width: 8, height: 8, borderRadius: '50%', background: 'currentColor'}} />;
  }
};

const Skills = ({ skills }) => {
  const categories = Object.keys(skills);

  return (
    <section id="skills" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', background: 'var(--accent-tertiary)', filter: 'blur(150px)', borderRadius: '50%', opacity: 0.15, zIndex: 0 }}></div>
      <div style={{ position: 'absolute', bottom: '0', right: '0', width: '400px', height: '400px', background: 'var(--accent-primary)', filter: 'blur(250px)', borderRadius: '50%', opacity: 0.1, zIndex: 0 }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '4rem 1rem' }}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Arsenal
        </motion.h2>
        
        {/* Responsive Grid for Categories exactly like screenshot */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '1.5rem', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          {categories.map((category, index) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.4 }}
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={2000} className="tilt-element">
                <div 
                  style={{ 
                    padding: '2rem 1.5rem', 
                    borderRadius: '16px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    height: '100%',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                    transition: 'border-color 0.4s ease',
                  }}
                  className="skill-card-container"
                >
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.8rem' }}>
                    {/* Glowing vertical bar */}
                    <div style={{ 
                      width: '4px', 
                      height: '24px', 
                      borderRadius: '4px', 
                      background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary))',
                      boxShadow: '0 0 10px var(--accent-secondary)',
                      marginRight: '12px'
                    }}></div>
                    <h3 style={{ fontSize: '1.3rem', color: '#fff', fontWeight: 600, letterSpacing: '0.5px' }}>
                      {category}
                    </h3>
                  </div>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                    {skills[category].map((skill, idx) => (
                      <motion.div 
                        key={idx}
                        whileHover={{ y: -3, scale: 1.05 }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          padding: '0.5rem 1rem',
                          borderRadius: '10px',
                          color: '#dedede',
                          fontSize: '0.95rem',
                          fontWeight: 500,
                          cursor: 'pointer',
                          transition: 'background 0.3s ease, border-color 0.3s ease'
                        }}
                        className="skill-pill"
                      >
                        <span style={{ display: 'flex', alignItems: 'center', fontSize: '1.1rem' }}>
                          {getIcon(skill)}
                        </span>
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
