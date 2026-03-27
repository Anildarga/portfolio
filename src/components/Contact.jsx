import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in all fields!');
      return;
    }
    try {
      const response = await fetch('https://formspree.io/f/meepopvd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message
        })
      });
      if (response.ok) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSent(false), 4000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      alert('Failed to send. Check your connection.');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    background: '#16161f',
    border: '1px solid #2a2a3a',
    borderRadius: '6px',
    color: '#e0e0e0',
    fontSize: '0.95rem',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border 0.3s'
  };

  return (
    <section id="contact" style={{ padding: '80px 10%', background: '#111118' }}>
      <h2 style={{ color: '#00f5ff', letterSpacing: '3px', textTransform: 'uppercase' }}>Contact</h2>
      <div style={{ width: '60px', height: '3px', background: '#bf5af2', margin: '10px 0 40px' }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

        {/* Left - Info */}
        <div>
          <p style={{ color: '#888', marginBottom: '2rem', lineHeight: 1.8 }}>
            Feel free to reach out for collaborations, opportunities, or just a chat!
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { label: 'Email', value: 'anildarga3777@gmail.com', url: 'mailto:anildarga3777@gmail.com' },
              { label: 'LinkedIn', value: 'linkedin.com/in/anild3777', url: 'https://linkedin.com/in/anild3777' },
              { label: 'GitHub', value: 'github.com/Anildarga', url: 'https://github.com/Anildarga' },
              { label: 'Phone', value: '+91-7411041580', url: 'tel:+917411041580' }
            ].map(function(item) {
              return (
                <a key={item.label} href={item.url} target="_blank" rel="noreferrer"
                  style={{ display: 'flex', gap: '1rem', alignItems: 'center', textDecoration: 'none' }}>
                  <span style={{ color: '#00f5ff', minWidth: '80px', fontSize: '0.85rem', letterSpacing: '1px' }}>
                    {item.label}
                  </span>
                  <span style={{ color: '#e0e0e0', fontSize: '0.9rem' }}>{item.value}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Right - Form */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            style={{ ...inputStyle, resize: 'vertical' }}
          />
          <button
            onClick={handleSubmit}
            style={{
              padding: '12px 30px',
              background: sent ? '#bf5af2' : '#00f5ff',
              color: '#000',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '0.95rem',
              cursor: 'pointer',
              letterSpacing: '1px',
              transition: 'background 0.3s'
            }}
          >
            {sent ? 'MESSAGE SENT!' : 'SEND MESSAGE'}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Contact;