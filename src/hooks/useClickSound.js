import { useEffect } from 'react';

const playWhooshSound = (e) => {
  const isInteractive = e.target.closest('a, button, [role="button"], input, textarea, select');
  if (!isInteractive) return;

  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    
    const ctx = new AudioContext();
    
    // Create a short white noise buffer (0.15 seconds)
    const bufferSize = ctx.sampleRate * 0.15;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1; // White noise
    }
    
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    
    // Filter to make it sound breathy/airy instead of harsh static
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 800; // Low-ish frequency for soft air
    filter.Q.value = 0.5;
    
    const gain = ctx.createGain();
    
    // Volume envelope: soft attack, soft decay
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.05); // Fade in
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15); // Fade out
    
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    
    noise.start();
  } catch (err) {
    // Ignore errors
  }
};

export const useClickSound = () => {
  useEffect(() => {
    document.addEventListener('mousedown', playWhooshSound);
    return () => {
      document.removeEventListener('mousedown', playWhooshSound);
    };
  }, []);
};
