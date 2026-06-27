import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <footer id="contact" style={{ padding: 'var(--s-64) 0' }}>
      <hr className="hard-divider" style={{ marginBottom: 'var(--s-40)' }} />
      <div className="grid-container" style={{ textAlign: 'center' }}>
        <div className="col-span-full">
          <motion.h2 
            className="text-hero"
            style={{ fontSize: 'clamp(80px, 12vw, 160px)', margin: '0 0 var(--s-64) 0' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            LET'S TALK
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-24)', alignItems: 'center' }}
          >
            <a href="mailto:yuvikakhanna56@gmail.com" className="editorial-link" style={{ fontSize: '24px' }}>
              yuvikakhanna56@gmail.com
            </a>
            
            <div style={{ display: 'flex', gap: 'var(--s-24)', marginTop: 'var(--s-40)' }}>
              <a href="https://github.com/yuvika646" target="_blank" rel="noreferrer" className="editorial-link">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="editorial-link">LinkedIn</a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
