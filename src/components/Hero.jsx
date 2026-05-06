import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, User, MessageCircle, Mail, Phone } from 'lucide-react';
import CodeRain from './CodeRain';
import Magnetic from './Magnetic';

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
    <section id="hero" className="hero-section">
      {/* Code Rain Background */}
      <CodeRain />

      {/* Intense Floating Orbs Background */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="hero-orb hero-orb-1"
      />
      <motion.div 
        animate={{ y: [0, 50, 0], x: [0, -40, 0] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="hero-orb hero-orb-2"
      />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-layout">
          
          {/* Left Text Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hero-text"
          >
            <motion.p variants={itemVariants} className="hero-subtitle">
              Welcome to my universe
            </motion.p>
            
            <motion.h1 variants={itemVariants} className="hero-heading">
              I am <br/>
              <span className="text-gradient">{personal.name}</span>
            </motion.h1>
            
            <motion.h2 variants={itemVariants} className="hero-role">
              {personal.role}
            </motion.h2>
            
            <motion.p variants={itemVariants} className="hero-tagline">
              {personal.tagline}
            </motion.p>
            
            <motion.div variants={itemVariants} className="hero-actions">
              <Magnetic strength={0.3}>
                <a 
                  href="#projects" 
                  className="hero-cta"
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
              </Magnetic>
              
              <div className="hero-socials">
              {personal.socials.map((social, index) => (
                <Magnetic key={index} strength={0.4}>
                  <motion.a 
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="hero-social-icon"
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
                </Magnetic>
              ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.4 }}
            className="hero-image-wrapper"
          >
            <div className="hero-image-container">
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

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 80px;
        }

        .hero-orb {
          position: absolute;
          border-radius: 50%;
          opacity: 0.15;
          z-index: 0;
        }

        .hero-orb-1 {
          top: 20%;
          left: 10%;
          width: 300px;
          height: 300px;
          background: var(--accent-primary);
          filter: blur(150px);
        }

        .hero-orb-2 {
          bottom: 10%;
          right: 5%;
          width: 400px;
          height: 400px;
          background: var(--accent-secondary);
          filter: blur(200px);
        }

        .hero-layout {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 4rem;
        }

        .hero-text {
          flex: 1 1 500px;
          max-width: 700px;
        }

        .hero-subtitle {
          color: var(--accent-secondary);
          font-weight: 600;
          letter-spacing: 2px;
          margin-bottom: 1rem;
          text-transform: uppercase;
          font-size: 1rem;
        }

        .hero-heading {
          font-size: clamp(2.5rem, 5vw, 5rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          font-family: Outfit, sans-serif;
        }

        .hero-role {
          font-size: clamp(1.2rem, 3vw, 2.5rem);
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          font-weight: 400;
        }

        .hero-tagline {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 600px;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          align-items: center;
        }

        .hero-cta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2.5rem;
          background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
          color: #fff;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.1rem;
          box-shadow: 0 10px 20px rgba(139, 92, 246, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hero-socials {
          display: flex;
          gap: 1rem;
        }

        .hero-social-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50%;
          color: var(--text-primary);
          transition: all 0.3s ease;
        }

        .hero-image-wrapper {
          flex: 1 1 400px;
          display: flex;
          justify-content: center;
        }

        .hero-image-container {
          position: relative;
          width: clamp(250px, 80%, 450px);
          aspect-ratio: 1/1;
          border-radius: 50%;
          padding: 10px;
          background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
          box-shadow: 0 25px 50px -12px rgba(139, 92, 246, 0.4);
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .hero-layout {
            gap: 3rem;
          }

          .hero-text {
            flex: 1 1 400px;
          }

          .hero-image-wrapper {
            flex: 1 1 300px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 70px;
            min-height: auto;
            padding-bottom: 60px;
          }

          .hero-layout {
            flex-direction: column-reverse;
            gap: 2.5rem;
            text-align: center;
            align-items: center;
          }

          .hero-text {
            flex: 1 1 auto;
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-image-wrapper {
            flex: 0 0 auto;
          }

          .hero-image-container {
            width: min(250px, 65vw);
          }

          .hero-tagline {
            font-size: 1rem;
            margin-bottom: 2rem;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-cta {
            padding: 0.85rem 2rem;
            font-size: 1rem;
          }

          .hero-social-icon {
            width: 44px;
            height: 44px;
          }

          .hero-orb-1 {
            width: 200px;
            height: 200px;
          }

          .hero-orb-2 {
            width: 250px;
            height: 250px;
          }
        }

        /* Small phones */
        @media (max-width: 480px) {
          .hero-section {
            padding-top: 60px;
          }

          .hero-image-container {
            width: min(200px, 55vw);
          }

          .hero-subtitle {
            font-size: 0.8rem;
            letter-spacing: 1px;
          }

          .hero-tagline {
            font-size: 0.95rem;
          }

          .hero-cta {
            padding: 0.75rem 1.5rem;
            font-size: 0.95rem;
          }

          .hero-social-icon {
            width: 40px;
            height: 40px;
          }

          .hero-socials {
            gap: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
