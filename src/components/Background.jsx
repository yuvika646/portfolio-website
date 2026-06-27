import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: -1, // Keep it behind everything
      overflow: 'hidden',
    }}>

      {/* Engineering Dot Grid Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: 'radial-gradient(var(--divider-color) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.5,
        }}
      />

      {/* Tech-Focused Animated Glows (Faint Blue & Purple) */}
      <motion.div
        animate={{
          x: ["-5%", "5%", "-10%", "0%"],
          y: ["-5%", "10%", "5%", "0%"],
          scale: [1, 1.1, 1.05, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, rgba(255,255,255,0) 70%)', // Subtle tech blue
          filter: 'blur(80px)',
        }}
      />

      <motion.div
        animate={{
          x: ["10%", "-5%", "5%", "0%"],
          y: ["10%", "-10%", "-5%", "0%"],
          scale: [1.1, 1, 1.15, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '70vw',
          height: '70vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.04) 0%, rgba(255,255,255,0) 70%)', // Subtle tech purple
          filter: 'blur(100px)',
        }}
      />
    </div>
  );
};

export default Background;
