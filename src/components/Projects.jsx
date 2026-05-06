import React from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-orb" />
      <div className="container" style={{ position:'relative', zIndex:1, paddingBottom:'3rem' }}>
        <motion.h2 className="section-title" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}}>
          Featured Work
        </motion.h2>
        <motion.div initial={{opacity:0,scale:0.95}} whileInView={{opacity:1,scale:1}} viewport={{once:true,margin:"-100px"}} transition={{duration:0.8,type:'spring',bounce:0.4}}>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{ delay:3500, disableOnInteraction:false }}
            coverflowEffect={{ rotate:20, stretch:0, depth:200, modifier:1, slideShadows:false }}
            pagination={{ clickable:true, dynamicBullets:true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="mySwiper"
            style={{ padding:'2rem 1rem 4rem 1rem' }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="project-slide">
                <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.02} transitionSpeed={2000} style={{width:'100%',height:'100%'}}>
                  <div
                    className="glass-panel project-card"
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(139,92,246,0.5)';
                      e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(139,92,246,0.2)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                      e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0,0,0,0.4)';
                    }}
                  >
                    <div className="project-img-wrap">
                      <img src={project.image} alt={project.title} style={{width:'100%',height:'100%',objectFit:'cover'}} />
                      <div className="project-img-overlay" />
                    </div>
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-desc">{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="project-tag">{tag}</span>
                        ))}
                      </div>
                      <div className="project-links">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary project-link">
                            <Code size={18} /> Code
                          </a>
                        )}
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noreferrer" className="project-link project-link-primary">
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
      <style>{`
        .projects-section{position:relative;overflow:hidden}
        .projects-orb{position:absolute;top:10%;right:5%;width:400px;height:400px;background:var(--accent-primary);filter:blur(200px);border-radius:50%;opacity:.1;z-index:0}
        .project-slide{width:380px;max-width:90vw}
        .project-card{overflow:hidden;display:flex;flex-direction:column;height:100%;min-height:480px;box-shadow:0 25px 50px -12px rgba(0,0,0,.4);border:1px solid rgba(255,255,255,.06);transition:border-color .4s ease,box-shadow .4s ease}
        .project-img-wrap{height:220px;overflow:hidden;position:relative}
        .project-img-overlay{position:absolute;inset:0;background:linear-gradient(to top,var(--bg-secondary) 5%,transparent 100%);opacity:.9}
        .project-content{padding:2rem;flex:1;display:flex;flex-direction:column;position:relative;margin-top:-20px}
        .project-title{font-size:1.6rem;margin-bottom:.5rem;font-family:Outfit,sans-serif}
        .project-desc{color:var(--text-secondary);margin-bottom:1.5rem;line-height:1.6;flex:1}
        .project-tags{display:flex;flex-wrap:wrap;gap:.6rem;margin-bottom:1.5rem}
        .project-tag{font-size:.8rem;padding:.3rem .8rem;background:rgba(139,92,246,.1);color:var(--accent-secondary);border-radius:20px;font-weight:500;letter-spacing:.5px}
        .project-links{display:flex;gap:1rem;margin-top:auto}
        .project-link{flex:1;text-align:center;display:flex;justify-content:center;align-items:center;gap:8px;padding:.6rem;border-radius:8px;font-weight:600}
        .project-link-primary{background:var(--accent-primary);color:#fff}
        @media(max-width:768px){
          .project-slide{width:300px;max-width:85vw}
          .project-card{min-height:420px}
          .project-img-wrap{height:180px}
          .project-content{padding:1.5rem}
          .project-title{font-size:1.3rem}
          .project-desc{font-size:.9rem;margin-bottom:1rem}
          .project-tags{gap:.4rem;margin-bottom:1rem}
          .project-tag{font-size:.75rem;padding:.25rem .6rem}
          .project-links{gap:.7rem}
          .project-link{padding:.5rem;font-size:.9rem}
          .projects-orb{width:250px;height:250px}
        }
        @media(max-width:480px){
          .project-slide{width:260px;max-width:80vw}
          .project-card{min-height:380px}
          .project-img-wrap{height:150px}
          .project-content{padding:1.2rem;margin-top:-15px}
          .project-title{font-size:1.15rem}
          .project-desc{font-size:.85rem}
          .project-tag{font-size:.7rem}
        }
        .swiper-button-next,.swiper-button-prev{color:var(--accent-primary) !important}
        @media(max-width:768px){
          .swiper-button-next,.swiper-button-prev{display:none !important}
        }
      `}</style>
    </section>
  );
};

export default Projects;
