import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      flexDirection: 'column',
      paddingTop: 'calc(120px + var(--s-24))', /* 120px masthead + offset */
      paddingBottom: 'var(--s-40)'
    }}>
      <div className="grid-container" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        
        <div className="col-span-full">
          <span className="text-kicker">PORTFOLIO / 2026</span>
        </div>
        
        <div className="grid-container" style={{ marginTop: 'auto', alignItems: 'end', padding: 0, width: '100%' }}>
          
          {/* Text Area (Left) */}
          <div className="col-desktop-8 col-tablet-6 col-mobile-4" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-24)' }}>
            <motion.h1 
              className="text-hero"
              style={{ maxWidth: '1200px' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              YUVIKA
              <br />
              KHANNA
            </motion.h1>
            
            <p className="text-body" style={{ maxWidth: '80ch' }}>
               Third-Year CS Student — Java, Python, TypeScript — Building scalable AI-powered & cloud-based applications.
            </p>
          </div>

          {/* Portrait Area (Right) */}
          <motion.div 
            className="col-desktop-4 col-tablet-6 col-mobile-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="box-cartoon" style={{ padding: 0, overflow: 'hidden', aspectRatio: '1/1' }}>
              <img src="/profile.png" alt="Yuvika Khanna" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </motion.div>
          
        </div>

      </div>
    </section>
  );
};

export default Hero;
