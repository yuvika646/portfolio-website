import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section style={{ padding: 'var(--s-64) 0' }}>
      <hr className="hard-divider" style={{ marginBottom: 'var(--s-40)' }} />
      <div className="grid-container">
        
        <div className="col-span-full" style={{ marginBottom: 'var(--s-24)' }}>
          <span className="text-kicker">EDUCATION</span>
        </div>

        <motion.div 
          className="col-span-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid-container" style={{ padding: 0 }}>
            <div className="col-desktop-8 col-tablet-4 col-mobile-4">
              <h3 className="text-body" style={{ fontWeight: 600 }}>
                B.Tech, Computer Science Engineering
              </h3>
            </div>
            
            <div className="col-start-9 col-end-13 col-tablet-2 col-mobile-4" style={{ textAlign: 'right' }}>
              <span className="text-body">Guru Nanak Dev University — 2023–2027</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
