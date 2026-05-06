import React from 'react';
import { motion } from 'framer-motion';

const About = ({ personal, education }) => {
  return (
    <section id="about" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-layout">
          
          {/* Bio Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="about-bio"
          >
            <h3 className="about-bio-heading">
              Hi, I'm <span className="text-gradient">{personal.name}</span>
            </h3>
            <p className="about-bio-text">
              {personal.about}
            </p>
            
            <a 
              href={personal.resumeUrl} 
              target="_blank" 
              rel="noreferrer"
              className="about-cv-btn"
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Download CV
            </a>
          </motion.div>

          {/* Education Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-education"
          >
            <h3 className="about-edu-heading">Education & Experience</h3>
            
            <div className="about-timeline">
              {education.map((item, idx) => (
                <div key={idx} className="about-timeline-item">
                  {/* Timeline Dot */}
                  <div className="about-timeline-dot"></div>
                  
                  <span className="about-timeline-period">
                    {item.period}
                  </span>
                  <h4 className="about-timeline-title">{item.title}</h4>
                  <h5 className="about-timeline-institution">{item.institution}</h5>
                  <p className="about-timeline-desc">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        .about-layout {
          display: flex;
          flex-wrap: wrap;
          gap: 4rem;
          justify-content: space-between;
        }

        .about-bio {
          flex: 1 1 500px;
        }

        .about-bio-heading {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          font-family: Outfit, sans-serif;
        }

        .about-bio-text {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .about-cv-btn {
          display: inline-block;
          padding: 0.8rem 2rem;
          background: linear-gradient(to right, var(--accent-primary), var(--accent-secondary));
          border-radius: 50px;
          color: #fff;
          font-weight: 600;
          box-shadow: var(--glow);
          transition: transform var(--transition-fast);
        }

        .about-education {
          flex: 1 1 400px;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .about-edu-heading {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          font-family: Outfit, sans-serif;
          color: var(--text-primary);
        }

        .about-timeline {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          border-left: 2px solid var(--accent-primary);
          padding-left: 1.5rem;
          position: relative;
        }

        .about-timeline-item {
          position: relative;
        }

        .about-timeline-dot {
          position: absolute;
          left: -29px;
          top: 0;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 4px solid var(--accent-primary);
        }

        .about-timeline-period {
          font-size: 0.9rem;
          color: var(--accent-secondary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .about-timeline-title {
          font-size: 1.3rem;
          margin-top: 0.5rem;
          margin-bottom: 0.2rem;
          color: var(--text-primary);
        }

        .about-timeline-institution {
          font-size: 1rem;
          color: var(--text-muted);
          font-weight: 500;
          margin-bottom: 0.8rem;
        }

        .about-timeline-desc {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .about-layout {
            gap: 3rem;
          }

          .about-bio {
            flex: 1 1 100%;
          }

          .about-education {
            flex: 1 1 100%;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .about-layout {
            flex-direction: column;
            gap: 2.5rem;
          }

          .about-bio-heading {
            font-size: 1.6rem;
            margin-bottom: 1rem;
          }

          .about-bio-text {
            font-size: 1rem;
            line-height: 1.7;
            margin-bottom: 1.5rem;
          }

          .about-edu-heading {
            font-size: 1.5rem;
          }

          .about-timeline-title {
            font-size: 1.15rem;
          }
        }

        /* Small phones */
        @media (max-width: 480px) {
          .about-layout {
            gap: 2rem;
          }

          .about-bio-heading {
            font-size: 1.4rem;
          }

          .about-bio-text {
            font-size: 0.95rem;
          }

          .about-cv-btn {
            padding: 0.7rem 1.5rem;
            font-size: 0.95rem;
          }

          .about-edu-heading {
            font-size: 1.3rem;
          }

          .about-timeline {
            padding-left: 1.2rem;
            gap: 1.5rem;
          }

          .about-timeline-dot {
            left: -24px;
            width: 12px;
            height: 12px;
            border-width: 3px;
          }

          .about-timeline-period {
            font-size: 0.8rem;
          }

          .about-timeline-title {
            font-size: 1.05rem;
          }

          .about-timeline-institution {
            font-size: 0.9rem;
          }

          .about-timeline-desc {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
