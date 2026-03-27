import React, { useState } from 'react';

const projects = [
  {
    title: 'RISC-V Processor for Signal Processing',
    shortDesc: 'Custom RISC-V processor with P-extension (Packed SIMD) support for DSP applications.',
    fullDesc: 'Designed a complete RISC-V datapath that supports the P extension (Packed SIMD) for DSP workloads. Identified and resolved pipeline hazards by implementing stall and data forwarding techniques. Created bring-up test programs to validate instruction functionality. Implemented edge detection on the designed processor and benchmarked RV32IP vs RV32I performance.',
    tags: ['Verilog', 'RISC-V', 'GTK Wave', 'iVerilog', 'VS Code'],
    link: 'https://github.com/Anildarga',
    date: 'June 2025',
    highlights: [
      'P-extension (Packed SIMD) support',
      'Hazard detection and data forwarding',
      'Edge detection implementation',
      'Performance benchmarking RV32IP vs RV32I'
    ]
  },
  {
    title: 'TypeStream — Netflix Clone',
    shortDesc: 'Full-featured streaming platform with video playback, auth, and cloud deployment.',
    fullDesc: 'Developed a Netflix-inspired streaming platform using Next.js with features including video playback, user authentication, and content browsing. Integrated GitHub OAuth to access user repository data. Strengthened security using OAuth, JWT, and social logins. Deployed and optimized on Vercel for production-grade performance.',
    tags: ['Next.js', 'OAuth', 'JWT', 'Vercel', 'React'],
    link: 'https://github.com/Anildarga/netflix_clone_anil.git',
    deployLink: 'https://netflix-clone-anil.vercel.app',
    date: 'January 2025',
    highlights: [
      'Video playback and content browsing',
      'GitHub OAuth integration',
      'JWT-based security',
      'Deployed on Vercel'
    ]
  }
];

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#16161f',
        borderRadius: '8px',
        padding: '2rem',
        border: hovered ? '1px solid #00f5ff' : '1px solid #2a2a3a',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 10px 30px rgba(0,245,255,0.08)' : 'none',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}
    >
         {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <p style={{ color: '#888', fontSize: '0.75rem', letterSpacing: '1px', marginBottom: '6px' }}>{project.date}</p>
          <h3 style={{ color: '#e0e0e0', fontSize: '1.1rem' }}>{project.title}</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
          <a href={project.link} target="_blank" rel="noreferrer"
            style={{ color: hovered ? '#00f5ff' : '#888', fontSize: '0.75rem', letterSpacing: '1px', transition: 'color 0.3s', textDecoration: 'none' }}>
            GitHub ↗
          </a>
          {project.deployLink && (
            <a href={project.deployLink} target="_blank" rel="noreferrer"
              style={{ color: hovered ? '#bf5af2' : '#888', fontSize: '0.75rem', letterSpacing: '1px', transition: 'color 0.3s', textDecoration: 'none' }}>
              Live ↗
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: 1.7 }}>
        {expanded ? project.fullDesc : project.shortDesc}
      </p>

      {/* Highlights (shown when expanded) */}
      {expanded && (
        <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
          {project.highlights.map(function(h) {
            return (
              <li key={h} style={{ color: '#aaa', fontSize: '0.85rem', marginBottom: '6px', lineHeight: 1.6 }}>
                {h}
              </li>
            );
          })}
        </ul>
      )}

      {/* Tags */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {project.tags.map(function(tag) {
          return (
            <span key={tag} style={{
              background: 'rgba(0,245,255,0.06)', color: '#00f5ff',
              padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem',
              border: '1px solid rgba(0,245,255,0.2)'
            }}>
              {tag}
            </span>
          );
        })}
      </div>

      {/* Expand Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          background: 'transparent',
          border: '1px solid #2a2a3a',
          color: '#888',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '0.8rem',
          letterSpacing: '1px',
          alignSelf: 'flex-start',
          transition: 'all 0.3s'
        }}
      >
        {expanded ? 'SHOW LESS ▲' : 'VIEW DETAILS ▼'}
      </button>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '80px 10%', background: '#111118' }}>
      <h2 style={{ color: '#00f5ff', letterSpacing: '3px', textTransform: 'uppercase' }}>Projects</h2>
      <div style={{ width: '60px', height: '3px', background: '#bf5af2', margin: '10px 0 40px' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {projects.map(function(p) {
          return <ProjectCard key={p.title} project={p} />;
        })}
      </div>
    </section>
  );
};

export default Projects;