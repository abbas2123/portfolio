import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, User, MessageCircle, Mail, Phone } from 'lucide-react';
import CodeRain from './CodeRain';

const Hero = ({ personal }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
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
    <section id="hero" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px' // for navbar
    }}>
      {/* Code Rain Background */}
      <CodeRain />

      {/* Intense Floating Orbs Background */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', background: 'var(--accent-primary)', filter: 'blur(150px)', borderRadius: '50%', opacity: 0.15, zIndex: 0 }}
      />
      <motion.div 
        animate={{ y: [0, 50, 0], x: [0, -40, 0] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', bottom: '10%', right: '5%', width: '400px', height: '400px', background: 'var(--accent-secondary)', filter: 'blur(200px)', borderRadius: '50%', opacity: 0.15, zIndex: 0 }}
      />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '4rem' }}>
          
          {/* Left Text Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ flex: '1 1 500px', maxWidth: '700px' }}
          >
            <motion.p variants={itemVariants} style={{ color: 'var(--accent-secondary)', fontWeight: 600, letterSpacing: '2px', marginBottom: '1rem', textTransform: 'uppercase' }}>
              Welcome to my universe
            </motion.p>
            
            <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', lineHeight: 1.1, marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif' }}>
              I am <br/>
              <span className="text-gradient">{personal.name}</span>
            </motion.h1>
            
            <motion.h2 variants={itemVariants} style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--text-primary)', marginBottom: '1.5rem', fontWeight: 400 }}>
              {personal.role}
            </motion.h2>
            
            <motion.p variants={itemVariants} style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: 1.6 }}>
              {personal.tagline}
            </motion.p>
            
            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <a 
                href="#projects" 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem 2.5rem',
                  background: 'linear-gradient(45deg, var(--accent-primary), var(--accent-secondary))',
                  color: '#fff',
                  borderRadius: '50px',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  boxShadow: '0 10px 20px rgba(139, 92, 246, 0.3)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 15px 25px rgba(139, 92, 246, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(139, 92, 246, 0.3)';
                }}
              >
                View Work <ArrowRight size={20} />
              </a>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                {personal.socials.map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '50%',
                      color: 'var(--text-primary)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                      e.currentTarget.style.borderColor = 'var(--accent-primary)';
                      e.currentTarget.style.color = 'var(--accent-secondary)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }}
                  >
                    {getIcon(social.platform)}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.4 }}
            style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}
          >
            <div style={{
              position: 'relative',
              width: 'clamp(300px, 100%, 450px)',
              aspectRatio: '1/1',
              borderRadius: '50%',
              padding: '10px',
              background: 'linear-gradient(45deg, var(--accent-primary), var(--accent-secondary))',
              boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.4)'
            }}>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  position: 'absolute', inset: 0, borderRadius: '50%',
                  background: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.8) 50%, transparent 60%)',
                  mixBlendMode: 'overlay'
                }}
              />
              <img 
                src="./profile.jpg" 
                alt={personal.name} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  border: '8px solid var(--bg-primary)',
                  position: 'relative',
                  zIndex: 2
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
