import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const roles = [
  'ECE Student',
  'VLSI Enthusiast',
  'Full-Stack Developer',
  'DSP Engineer',
  'Open Source Contributor'
];

const TypingEffect = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <span style={{ color: '#bf5af2' }}>
      {displayed}
      <span style={{ borderRight: '2px solid #bf5af2', marginLeft: '2px', animation: 'blink 1s infinite' }} />
    </span>
  );
};

const Hero = () => {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 10%',
      background: 'radial-gradient(ellipse at top left, #0d0d1a 0%, #0a0a0f 70%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      <div style={{
        position: 'absolute', width: '400px', height: '400px',
        borderRadius: '50%', top: '10%', right: '10%',
        background: 'radial-gradient(circle, rgba(0,245,255,0.05) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ color: '#00f5ff', letterSpacing: '3px', fontSize: '0.9rem', marginBottom: '10px' }}
        >
          HELLO, I AM
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '15px', color: '#e0e0e0' }}
        >
          Anil Darga
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', fontWeight: 400, marginBottom: '20px', minHeight: '2rem' }}
        >
          <TypingEffect />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ color: '#888', maxWidth: '500px', fontSize: '1rem', marginBottom: '40px', lineHeight: 1.8 }}
        >
          Passionate about VLSI, DSP, and Full-Stack Development.
          Building things that bridge hardware and software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <Link to="projects" smooth={true} duration={500} offset={-70}>
            <button style={{
              padding: '12px 30px', background: '#00f5ff', color: '#000',
              border: 'none', borderRadius: '4px', fontWeight: 700,
              fontSize: '0.95rem', cursor: 'pointer', letterSpacing: '1px'
            }}>
              VIEW PROJECTS
            </button>
          </Link>

          <Link to="contact" smooth={true} duration={500} offset={-70}>
            <button style={{
              padding: '12px 30px', background: 'transparent',
              color: '#00f5ff', border: '1px solid #00f5ff',
              borderRadius: '4px', fontWeight: 700, fontSize: '0.95rem',
              cursor: 'pointer', letterSpacing: '1px'
            }}>
              CONTACT ME
            </button>
          </Link>

          <a href="/resume.pdf" download="Anil_Darga_Resume.pdf">
            <button style={{
              padding: '12px 30px', background: 'transparent',
              color: '#bf5af2', border: '1px solid #bf5af2',
              borderRadius: '4px', fontWeight: 700, fontSize: '0.95rem',
              cursor: 'pointer', letterSpacing: '1px'
            }}>
              RESUME ↓
            </button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          style={{ marginTop: '50px', display: 'flex', gap: '1.5rem' }}
        >
          {[
            { label: 'GitHub', url: 'https://github.com/Anildarga' },
            { label: 'LinkedIn', url: 'https://linkedin.com/in/anild3777' },
            { label: 'Email', url: 'mailto:anildarga3777@gmail.com' }
          ].map(function(item) {
            return (
              <a key={item.label} href={item.url} target="_blank" rel="noreferrer"
                style={{ color: '#888', fontSize: '0.85rem', letterSpacing: '1px' }}>
                {item.label}
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;