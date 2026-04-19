import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SiJavascript, SiReact, SiNodedotjs, SiMongodb, 
  SiTailwindcss, SiTypescript, SiHtml5, SiCss3, SiDocker, SiGit
} from 'react-icons/si';
import { FaJava, FaDatabase, FaCode } from 'react-icons/fa';

const icons = [
  <SiJavascript />, <SiReact />, <SiNodedotjs />, <SiMongodb />,
  <SiTailwindcss />, <SiTypescript />, <SiHtml5 />, <SiCss3 />,
  <FaJava />, <FaDatabase />, <FaCode />, <SiDocker />, <SiGit />,
  '< / >', '{ }', '=>', '[ ]', '++', '&&', '||', '()'
];

const CodeRain = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Generate an array of random falling elements
    const elementCount = 30; // Number of items raining at once
    const newElements = Array.from({ length: elementCount }).map((_, i) => {
      const isIcon = Math.random() > 0.4;
      const content = icons[Math.floor(Math.random() * icons.length)];
      
      return {
        id: i,
        content,
        left: `${Math.random() * 100}%`,
        duration: 10 + Math.random() * 20, // Fall speed between 10s and 30s
        delay: Math.random() * -20, // Start at different times (negative to pre-fill screen)
        size: Math.random() > 0.5 ? '1.5rem' : '1rem',
        opacity: 0.1 + Math.random() * 0.2 // Very faint background opacity
      };
    });
    setElements(newElements);
  }, []);

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 0
    }}>
      {elements.map((el) => (
        <motion.div
          key={el.id}
          initial={{ y: '-10vh' }}
          animate={{ y: '110vh' }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            ease: "linear",
            delay: el.delay
          }}
          style={{
            position: 'absolute',
            left: el.left,
            fontSize: el.size,
            color: 'var(--accent-secondary)', // Rain color
            opacity: el.opacity,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            filter: 'blur(1px)' // giving it a slight depth of field effect
          }}
        >
          {el.content}
        </motion.div>
      ))}
    </div>
  );
};

export default CodeRain;
