import React from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

const Projects = ({ projects }) => {
  return (
    <section id="projects" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '10%', right: '5%', width: '400px', height: '400px', background: 'var(--accent-primary)', filter: 'blur(200px)', borderRadius: '50%', opacity: 0.1, zIndex: 0 }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: '3rem' }}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Work
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="mySwiper"
            style={{ padding: '2rem 1rem 4rem 1rem' }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id} style={{ width: '380px', maxWidth: '90vw' }}>
                <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.02} transitionSpeed={2000} style={{ width: '100%', height: '100%' }}>
                  <div 
                    className="glass-panel" 
                    style={{ 
                      overflow: 'hidden', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      height: '100%',
                      minHeight: '480px',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      transition: 'border-color 0.4s ease, box-shadow 0.4s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                      e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(139, 92, 246, 0.2)';
                    }}
                    onMouseOut={(e) => {
                       e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                       e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.4)';
                    }}
                  >
                    <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                      <div style={{ width: '100%', height: '100%' }}>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-secondary) 5%, transparent 100%)', opacity: 0.9 }}></div>
                    </div>
                    
                    <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', marginTop: '-20px' }}>
                      <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>{project.title}</h3>
                      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6, flex: 1 }}>{project.description}</p>
                      
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.5rem' }}>
                        {project.tags.map((tag, i) => (
                           <span key={i} style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'rgba(139, 92, 246, 0.1)', color: 'var(--accent-secondary)', borderRadius: '20px', fontWeight: 500, letterSpacing: '0.5px' }}>
                             {tag}
                           </span>
                        ))}
                      </div>
                      
                      <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary" style={{ flex: 1, textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '0.6rem' }}>
                            <Code size={18} /> Code
                          </a>
                        )}
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noreferrer" style={{ flex: 1, textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '0.6rem', background: 'var(--accent-primary)', color: '#fff', borderRadius: '8px', fontWeight: 600 }}>
                            <ExternalLink size={18} /> Live Match
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Tilt>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
