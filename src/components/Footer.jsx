import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      padding: '30px 10%', background: '#0a0a0f',
      borderTop: '1px solid #2a2a3a',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '1rem'
    }}>
      <span style={{ color: '#888', fontSize: '0.85rem' }}>
        Built by <span style={{ color: '#00f5ff' }}>Anil Darga</span>
      </span>
      <span style={{ color: '#888', fontSize: '0.85rem' }}>
        anildarga3777@gmail.com
      </span>
    </footer>
  );
};

export default Footer;