import React from 'react';
import { motion, useMotionValue } from 'framer-motion';

import { FaJava as FaJavaIcon, FaDatabase as FaDatabaseIcon, FaCode as FaCodeIcon, FaHtml5, FaCss3Alt, FaAws } from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiCplusplus,
  SiReact, SiRedux, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiFirebase,
  SiGit, SiDocker, SiNginx, SiFigma, SiPostman
} from 'react-icons/si';

const getIcon = (s) => {
  const map = {
    'JavaScript': <SiJavascript color="#F7DF1E" />,
    'TypeScript': <SiTypescript color="#3178C6" />,
    'HTML5': <FaHtml5 color="#E34F26" />,
    'CSS3': <FaCss3Alt color="#1572B6" />,
    'C++': <SiCplusplus color="#00599C" />,
    'Java': <FaJavaIcon color="#b07219" />,
    'SQL / NoSQL': <FaDatabaseIcon color="#336791" />,
    'React': <SiReact color="#61DAFB" />,
    'Redux': <SiRedux color="#764ABC" />,
    'Tailwind CSS': <SiTailwindcss color="#06B6D4" />,
    'Bootstrap': <SiBootstrap color="#7952B3" />,
    'EJS': <FaCodeIcon color="#a1cf36" />,
    'Node.js': <SiNodedotjs color="#339933" />,
    'Express.js': <SiExpress color="#FFF" />,
    'MongoDB': <SiMongodb color="#47A248" />,
    'PostgreSQL': <SiPostgresql color="#336791" />,
    'Firebase': <SiFirebase color="#FFCA28" />,
    'Git': <SiGit color="#F05032" />,
    'Docker': <SiDocker color="#2496ED" />,
    'AWS': <FaAws color="#232F3E" />,
    'Nginx': <SiNginx color="#009639" />,
    'Figma': <SiFigma color="#F24E1E" />,
    'Postman': <SiPostman color="#FF6C37" />,
  };
  return map[s] || <div style={{width:8,height:8,borderRadius:'50%',background:'currentColor'}} />;
};

const BentoCard = ({ category, items, index, color }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isLarge = index === 0 || index === 1;

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={onMouseMove}
      className={`bento-card ${isLarge ? 'bento-large' : ''}`}
    >
      <motion.div style={{
        position:'absolute', inset:0,
        background:`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${color}15, transparent 80%)`,
        zIndex:0
      }} />
      <div style={{ position:'relative', zIndex:1, height:'100%', display:'flex', flexDirection:'column' }}>
        <div className="bento-header">
          <div style={{ width:12, height:12, borderRadius:3, background:color, boxShadow:`0 0 15px ${color}`, marginRight:15 }} />
          <h3 className="bento-title">{category}</h3>
        </div>
        <div className="bento-items">
          {items.map((item, idx) => (
            <motion.div key={idx} whileHover={{ scale:1.05, borderColor:color }} className="skill-pill">
              <span style={{ fontSize:'1.2rem', display:'flex' }}>{getIcon(item)}</span>
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
  const colors = ['#8B5CF6','#3B82F6','#10B981','#F59E0B'];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-orb s-orb1" />
      <div className="skills-orb s-orb2" />
      <div className="container">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} style={{marginBottom:'4rem',textAlign:'center'}}>
          <h2 className="section-title" style={{marginBottom:'1rem'}}>Technical Arsenal</h2>
          <p className="skills-sub">A curated list of my expertise in building robust, performant web applications.</p>
        </motion.div>
        <div className="bento-grid">
          {categories.map((cat, i) => (
            <BentoCard key={cat} category={cat} items={skills[cat]} index={i} color={colors[i%colors.length]} />
          ))}
        </div>
      </div>
      <style>{`
        .skills-section{position:relative;overflow:hidden}
        .skills-orb{position:absolute;border-radius:50%;opacity:.1}
        .s-orb1{top:10%;right:-10%;width:500px;height:500px;background:var(--accent-primary);filter:blur(200px)}
        .s-orb2{bottom:10%;left:-10%;width:500px;height:500px;background:var(--accent-secondary);filter:blur(200px)}
        .skills-sub{color:var(--text-secondary);max-width:600px;margin:0 auto;font-size:1.1rem}
        .bento-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-auto-flow:dense;gap:1.5rem;max-width:1200px;margin:0 auto}
        .bento-card{position:relative;border-radius:24px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);overflow:hidden;min-height:260px;padding:2.5rem;cursor:default}
        .bento-large{grid-column:span 2}
        .bento-header{display:flex;align-items:center;margin-bottom:2rem}
        .bento-title{font-size:1.4rem;color:#fff;font-weight:700;font-family:Outfit,sans-serif}
        .bento-items{display:flex;flex-wrap:wrap;gap:.8rem;align-content:flex-start}
        .skill-pill{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);padding:.6rem 1.2rem;border-radius:12px;color:#fff;font-size:.95rem;font-weight:500;transition:border-color .3s ease}
        @media(max-width:768px){
          .bento-grid{grid-template-columns:1fr;gap:1rem}
          .bento-large{grid-column:span 1}
          .bento-card{padding:1.5rem;min-height:auto;border-radius:16px}
          .bento-header{margin-bottom:1.2rem}
          .bento-title{font-size:1.2rem}
          .bento-items{gap:.6rem}
          .skill-pill{padding:.5rem .9rem;font-size:.85rem;border-radius:10px;gap:8px}
          .skills-sub{font-size:.95rem}
          .s-orb1,.s-orb2{width:300px;height:300px}
        }
        @media(max-width:480px){
          .bento-card{padding:1.2rem}
          .bento-title{font-size:1.1rem}
          .skill-pill{padding:.4rem .7rem;font-size:.8rem}
        }
      `}</style>
    </section>
  );
};

export default Skills;
