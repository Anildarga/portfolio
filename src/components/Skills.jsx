import React, { useEffect, useRef, useState } from 'react';

const skillGroups = [
  {
    category: 'Hardware & HDL',
    skills: [
      { name: 'Verilog / VHDL', level: 85 },
      { name: 'RISC-V / DSP', level: 80 },
      { name: 'Embedded C', level: 75 },
      { name: 'Vivado / Cadence', level: 70 }
    ]
  },
  {
    category: 'Web Development',
    skills: [
      { name: 'HTML / CSS', level: 85 },
      { name: 'Next.js / React', level: 75 },
      { name: 'OAuth / JWT', level: 70 },
      { name: 'Git / Vercel', level: 80 }
    ]
  },
  {
    category: 'Other',
    skills: [
      { name: 'Python', level: 80 },
      { name: 'Matlab', level: 65 },
      { name: 'Data Science / ML', level: 70 },
      { name: 'AutoCAD / HFSS', level: 60 }
    ]
  }
];

const SkillBar = ({ name, level }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setWidth(level), 200);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ color: '#e0e0e0', fontSize: '0.9rem' }}>{name}</span>
        <span style={{ color: '#00f5ff', fontSize: '0.85rem' }}>{level}%</span>
      </div>
      <div style={{ background: '#2a2a3a', borderRadius: '4px', height: '6px', overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: width + '%',
          background: 'linear-gradient(90deg, #00f5ff, #bf5af2)',
          borderRadius: '4px',
          transition: 'width 1s ease'
        }} />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '80px 10%', background: '#0a0a0f' }}>
      <h2 style={{ color: '#00f5ff', letterSpacing: '3px', textTransform: 'uppercase' }}>Skills</h2>
      <div style={{ width: '60px', height: '3px', background: '#bf5af2', margin: '10px 0 40px' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
        {skillGroups.map(function(group) {
          return (
            <div key={group.category} style={{
              background: '#16161f', borderRadius: '8px',
              padding: '1.8rem', border: '1px solid #2a2a3a'
            }}>
              <h3 style={{
                color: '#bf5af2', marginBottom: '20px',
                fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase'
              }}>
                {group.category}
              </h3>
              {group.skills.map(function(skill) {
                return <SkillBar key={skill.name} name={skill.name} level={skill.level} />;
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;