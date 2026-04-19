import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, User, MessageCircle, Mail, Phone } from 'lucide-react';

const Hero = ({ personal }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const getIcon = (platform) => {
    switch(platform.toLowerCase()) {
      case 'github': return <Code size={22} />;
      case 'linkedin': return <User size={22} />;
      case 'twitter': return <MessageCircle size={22} />;
      case 'whatsapp': return <Phone size={22} />;
      default: return null;
    }
  };

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      
      {/* Background glow effects */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', background: 'var(--accent-primary)', filter: 'blur(150px)', borderRadius: '50%', opacity: 0.3, zIndex: 0 }}></div>
      <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: '300px', height: '300px', background: 'var(--accent-secondary)', filter: 'blur(150px)', borderRadius: '50%', opacity: 0.2, zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '800px' }}
        >
          <motion.h2 variants={itemVariants} style={{ fontSize: '1.2rem', color: 'var(--accent-primary)', marginBottom: '1rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>
            Hi, my name is
          </motion.h2>
          
          <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', margin: '0 0 0.5rem -4px' }}>
            {personal.name}.
          </motion.h1>
          
          <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            I build things for the web.
          </motion.h1>
          
          <motion.p variants={itemVariants} style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '3rem', lineHeight: 1.8 }}>
            {personal.tagline}
          </motion.p>
          
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div 
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))', padding: '1rem 2rem', borderRadius: '50px', fontWeight: 600, cursor: 'pointer', boxShadow: 'var(--glow)', transition: 'transform var(--transition-fast)' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              onClick={() => {
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Check out my work <ArrowRight size={20} />
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', marginLeft: '1rem' }}>
              {personal.socials.map((social, idx) => (
                <motion.a 
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, color: 'var(--accent-primary)' }}
                  style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                >
                  {getIcon(social.platform)}
                </motion.a>
              ))}
              <motion.a 
                href={`mailto:${personal.email}`}
                whileHover={{ y: -3, color: 'var(--accent-primary)' }}
                style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
              >
                <Mail size={22} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
