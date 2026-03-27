import React, { useState, useRef } from 'react';

const playlist = [
    {
    title: 'Coding Vibes',
    artist: 'Free Music',
    url: 'https://cdn.pixabay.com/download/audio/2022/08/02/audio_884fe92c21.mp3'
  },
  {
    title: 'Chill Lofi',
    artist: 'Free Music',
    url: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3'
  },
  {
    title: 'Ambient Flow',
    artist: 'Free Music',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' // ✅ fixed
  },
  {
    title: 'Soft Piano',
    artist: 'Free Music',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' // ✅ fixed
  },
  {
    title: 'Deep Focus',
    artist: 'Free Music',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' // ✅ fixed
  }
];

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [volume, setVolume] = useState(0.4);
  const [expanded, setExpanded] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.play().then(() => setPlaying(true)).catch((e) => console.log(e));
  };

  const handlePause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setPlaying(false);
  };

  const togglePlay = () => {
    if (playing) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const changeSong = (index) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.src = playlist[index].url;
    audio.load();
    setCurrentIndex(index);
    setPlaying(false);
    audio.volume = volume;
    audio.play().then(() => setPlaying(true)).catch((e) => console.log(e));
  };

  const nextSong = () => changeSong((currentIndex + 1) % playlist.length);
  const prevSong = () => changeSong((currentIndex - 1 + playlist.length) % playlist.length);

  const current = playlist[currentIndex];

  return (
    <div style={{
      position: 'fixed', bottom: '30px', right: '30px',
      zIndex: 999, display: 'flex', flexDirection: 'column',
      alignItems: 'flex-end', gap: '10px'
    }}>
      <audio ref={audioRef} src={current.url} onEnded={nextSong} />

      {expanded && (
        <div style={{
          background: '#16161f', border: '1px solid #2a2a3a',
          borderRadius: '12px', padding: '16px 20px', width: '240px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.4)'
        }}>
          {/* Song Info */}
          <div style={{ marginBottom: '12px' }}>
            <p style={{ color: '#00f5ff', fontSize: '0.85rem', fontWeight: 700, marginBottom: '2px' }}>
              {current.title}
            </p>
            <p style={{ color: '#888', fontSize: '0.75rem' }}>{current.artist}</p>
          </div>

          {/* Playlist dots */}
          <div style={{ display: 'flex', gap: '4px', marginBottom: '14px' }}>
            {playlist.map(function(_, i) {
              return (
                <div key={i} onClick={() => changeSong(i)} style={{
                  width: i === currentIndex ? '16px' : '6px',
                  height: '6px', borderRadius: '3px',
                  background: i === currentIndex ? '#00f5ff' : '#2a2a3a',
                  cursor: 'pointer', transition: 'all 0.3s'
                }} />
              );
            })}
          </div>

          {/* Debug test
          <button onClick={() => {
            const a = new Audio('https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3');
            a.volume = 0.5;
            a.play().then(() => alert('Audio works!')).catch((e) => alert('Error: ' + e.message));
          }} style={{
            background: '#bf5af2', border: 'none', color: '#fff',
            padding: '6px 12px', borderRadius: '4px', cursor: 'pointer',
            fontSize: '0.75rem', marginBottom: '10px', width: '100%'
          }}>
            Test Audio
          </button> */}

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '12px' }}>
            <button onClick={prevSong} style={{
              background: 'none', border: 'none', color: '#888',
              cursor: 'pointer', fontSize: '1.1rem'
            }}>⏮</button>

            <button onClick={togglePlay} style={{
              background: '#00f5ff', border: 'none', borderRadius: '50%',
              width: '42px', height: '42px', cursor: 'pointer',
              fontSize: '1.1rem', display: 'flex', alignItems: 'center',
              justifyContent: 'center', color: '#000', fontWeight: 700
            }}>
              {playing ? '⏸' : '▶'}
            </button>

            <button onClick={nextSong} style={{
              background: 'none', border: 'none', color: '#888',
              cursor: 'pointer', fontSize: '1.1rem'
            }}>⏭</button>
          </div>

          {/* Volume */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#888', fontSize: '0.75rem' }}>🔈</span>
            <input
              type="range" min="0" max="1" step="0.05"
              value={volume}
              onChange={(e) => {
                const v = parseFloat(e.target.value);
                setVolume(v);
                if (audioRef.current) audioRef.current.volume = v;
              }}
              style={{ width: '100%', accentColor: '#00f5ff', cursor: 'pointer' }}
            />
            <span style={{ color: '#888', fontSize: '0.75rem' }}>🔊</span>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button onClick={() => setExpanded(!expanded)} style={{
        width: '50px', height: '50px', borderRadius: '50%',
        background: playing ? 'linear-gradient(135deg, #00f5ff, #bf5af2)' : '#16161f',
        border: '1px solid #2a2a3a', cursor: 'pointer', fontSize: '1.3rem',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: playing ? '0 0 20px rgba(0,245,255,0.3)' : 'none',
        transition: 'all 0.3s'
      }}>
        🎵
      </button>
    </div>
  );
};

export default MusicPlayer;