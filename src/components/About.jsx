import React from 'react';

const About = () => {
  return (
    <section id="about" style={{ padding: '80px 10%', background: '#0a0a0f' }}>
      <h2 style={{ color: '#00f5ff', letterSpacing: '3px', textTransform: 'uppercase' }}>About Me</h2>
      <div style={{ width: '60px', height: '3px', background: '#bf5af2', margin: '10px 0 40px' }} />
      <p style={{ color: '#e0e0e0', maxWidth: '650px', lineHeight: 1.9, fontSize: '1rem' }}>
        I am Anil Darga, a final year Electronics and Communication Engineering student at RV College of Engineering, Bengaluru.
        I have a strong interest in VLSI design, DSP, and full-stack web development. I enjoy working on projects that
        combine both hardware and software worlds.
      </p>
    </section>
  );
};

export default About;