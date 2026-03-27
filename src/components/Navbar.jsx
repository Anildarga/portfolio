import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['hero', 'about', 'projects', 'skills', 'certifications', 'contact'];
      sections.forEach(function(id) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) setActive(id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['hero', 'about', 'projects', 'skills', 'certifications', 'contact'];

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 1000,
      padding: '15px 10%',
      background: scrolled ? 'rgba(10,10,15,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid #2a2a3a' : 'none',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#00f5ff', letterSpacing: '2px' }}>
        AD<span style={{ color: '#bf5af2' }}>.</span>
      </div>

      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
        {navLinks.map(function(link) {
          const isActive = active === link;
          return (
            <li key={link}>
              <Link
                to={link} smooth={true} duration={500} offset={-70}
                style={{
                  cursor: 'pointer', textTransform: 'capitalize',
                  fontSize: '0.95rem', letterSpacing: '1px',
                  color: isActive ? '#00f5ff' : '#888',
                  borderBottom: isActive ? '2px solid #00f5ff' : '2px solid transparent',
                  paddingBottom: '4px', transition: 'all 0.3s ease'
                }}
              >
                {link}
              </Link>
            </li>
          );
        })}

        {/* Dark/Light Toggle */}
        <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: 'transparent',
              border: '1px solid #2a2a3a',
              borderRadius: '20px',
              padding: '5px 14px',
              cursor: 'pointer',
              fontSize: '1rem',
              color: '#e0e0e0',
              transition: 'all 0.3s',
              display: 'flex', alignItems: 'center', gap: '6px'
            }}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;