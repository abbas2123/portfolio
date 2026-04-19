import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
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

const BentoCard = ({ category, items, index, color }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Bento Sizes (index based)
  const isLarge = index === 0 || index === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={onMouseMove}
      style={{
        gridColumn: isLarge ? 'span 2' : 'span 1',
        position: 'relative',
        borderRadius: '24px',
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        overflow: 'hidden',
        height: '100%',
        minHeight: '260px',
        padding: '2.5rem',
        cursor: 'default',
        group: 'hover'
      }}
    >
      {/* Interactive Glow Background */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${color}15, transparent 80%)`,
          zIndex: 0
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
          <div style={{ 
            width: '12px', height: '12px', borderRadius: '3px', 
            background: color, boxShadow: `0 0 15px ${color}`, 
            marginRight: '15px' 
          }} />
          <h3 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 700, fontFamily: 'Outfit, sans-serif' }}>
            {category}
          </h3>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', alignContent: 'flex-start' }}>
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, borderColor: color }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '0.6rem 1.2rem',
                borderRadius: '12px',
                color: '#fff',
                fontSize: '0.95rem',
                fontWeight: 500,
                transition: 'border-color 0.3s ease'
              }}
            >
              <span style={{ fontSize: '1.2rem', display: 'flex' }}>{getIcon(item)}</span>
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = ({ skills }) => {
  const categories = Object.keys(skills);
  const colors = [
    '#8B5CF6', // Languages (Purple)
    '#3B82F6', // Frontend (Blue)
    '#10B981', // Backend (Emerald)
    '#F59E0B'  // Tools (Orange)
  ];

  return (
    <section id="skills" style={{ position: 'relative', overflow: 'hidden', padding: '100px 0' }}>
      {/* Dynamic Ambient Backgrounds */}
      <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '500px', height: '500px', background: 'var(--accent-primary)', filter: 'blur(200px)', borderRadius: '50%', opacity: 0.1 }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '-10%', width: '500px', height: '500px', background: 'var(--accent-secondary)', filter: 'blur(200px)', borderRadius: '50%', opacity: 0.1 }} />

      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Technical Arsenal</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            A curated list of my expertise in building robust, performant web applications.
          </p>
        </motion.div>
        
        {/* Bento Grid Layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gridAutoFlow: 'dense',
          gap: '1.5rem', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          {categories.map((category, index) => (
            <BentoCard 
              key={category} 
              category={category} 
              items={skills[category]} 
              index={index}
              color={colors[index % colors.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
