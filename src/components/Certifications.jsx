import React, { useState } from 'react';

const certifications = [
  {
    title: 'Web Development',
    issuer: 'Code Alpha',
    year: '2024',
    description: 'Completed a web development program covering modern frontend and backend technologies.',
    color: '#bf5af2',
    embedLink: 'https://drive.google.com/file/d/1oeI1nvIK9I-UPMHBJk89uSxpHAH64os1/preview'
  },
  {
    title: 'Introduction to RISC-V (LFD110)',
    issuer: 'The Linux Foundation',
    year: 'March 2026',
    description: 'Successfully completed the Introduction to RISC-V course by The Linux Foundation. Certificate ID: LF-4vvlzlm0dy',
    color: '#00f5ff',
    embedLink: 'https://drive.google.com/file/d/18nenyZnwDOM4BZTJt5BILMOe8YDlK4uN/preview'
  },
  {
    title: 'Data Science for Engineers (Elite)',
    issuer: 'NPTEL — IIT Madras',
    year: 'Jan-Mar 2024',
    description: 'Awarded Elite certification for successfully completing Data Science for Engineers with a consolidated score of 72%. Online Assignments: 24.79/25 | Proctored Exam: 47.11/75. Roll No: NPTEL24CS53S646603081',
    color: '#f5a623',
    embedLink: 'https://drive.google.com/file/d/1yeTfvQDqe0jND3HfYYX7gRy2n8bxSRwN/preview'
  }
];

const CertCard = ({ cert }) => {
  const [hovered, setHovered] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#16161f',
        borderRadius: '8px',
        padding: '1.8rem',
        border: hovered ? '1px solid ' + cert.color : '1px solid #2a2a3a',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 8px 25px rgba(0,245,255,0.07)' : 'none',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}
    >
      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{
          background: 'rgba(0,245,255,0.08)', color: cert.color,
          padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem',
          border: '1px solid rgba(0,245,255,0.15)'
        }}>
          {cert.issuer}
        </span>
        <span style={{ color: '#888', fontSize: '0.8rem' }}>{cert.year}</span>
      </div>

      {/* Title */}
      <h3 style={{ color: '#e0e0e0', fontSize: '1rem', lineHeight: 1.4 }}>
        {cert.title}
      </h3>

      {/* Description */}
      <p style={{ color: '#888', fontSize: '0.875rem', lineHeight: 1.7 }}>
        {cert.description}
      </p>

      {/* Badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: cert.color }} />
        <span style={{ color: cert.color, fontSize: '0.78rem', letterSpacing: '1px' }}>CERTIFIED</span>
      </div>

      {/* View Certificate Button */}
      <button
        onClick={() => setShowEmbed(!showEmbed)}
        style={{
          marginTop: '8px',
          padding: '8px 18px',
          background: showEmbed ? cert.color : 'transparent',
          color: showEmbed ? '#000' : cert.color,
          border: '1px solid ' + cert.color,
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '0.8rem',
          fontWeight: 700,
          letterSpacing: '1px',
          transition: 'all 0.3s',
          alignSelf: 'flex-start'
        }}
      >
        {showEmbed ? 'HIDE CERTIFICATE ▲' : 'VIEW CERTIFICATE ▼'}
      </button>

      {/* Embedded PDF Viewer */}
      {showEmbed && (
        <div style={{
          marginTop: '10px',
          borderRadius: '6px',
          overflow: 'hidden',
          border: '1px solid ' + cert.color,
          transition: 'all 0.3s'
        }}>
          <iframe
            src={cert.embedLink}
            width="100%"
            height="400px"
            style={{ border: 'none', display: 'block' }}
            title={cert.title}
            allow="autoplay"
          />
        </div>
      )}
    </div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" style={{ padding: '80px 10%', background: '#0a0a0f' }}>
      <h2 style={{ color: '#00f5ff', letterSpacing: '3px', textTransform: 'uppercase' }}>Certifications</h2>
      <div style={{ width: '60px', height: '3px', background: '#bf5af2', margin: '10px 0 40px' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {certifications.map(function(cert) {
          return <CertCard key={cert.title} cert={cert} />;
        })}
      </div>
      {/* <p style={{ color: '#888', fontSize: '0.8rem', marginTop: '2rem' }}>
        * More certifications coming soon — Internshala Data Science & ML
      </p> */}
    </section>
  );
};

export default Certifications;