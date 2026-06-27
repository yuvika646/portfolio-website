import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" style={{ padding: 'var(--s-64) 0' }}>
      <hr className="hard-divider" style={{ marginBottom: 'var(--s-40)' }} />
      <div className="grid-container">
        
        <div className="col-span-full" style={{ marginBottom: 'var(--s-24)' }}>
          <span className="text-kicker">EXPERIENCE / 01</span>
        </div>

        <motion.div 
          className="col-span-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid-container" style={{ padding: 0 }}>
            {/* Columns 1-8: Role & Bullets */}
            <div className="col-desktop-8 col-tablet-4 col-mobile-4">
              <h3 className="text-body" style={{ fontWeight: 600, marginBottom: 'var(--s-24)' }}>
                Open Source Contributor — GSSOC
              </h3>
              <ul className="text-body" style={{ paddingLeft: 'var(--s-24)', display: 'flex', flexDirection: 'column', gap: 'var(--s-8)' }}>
                <li>Collaborated in Agile teams across distributed environments using TypeScript and Java</li>
                <li>Refactored monolithic React components into reusable modules for a community of 50+ contributors</li>
                <li>Participated in code reviews following industry SDLC practices</li>
                <li>Debugged 10+ critical frontend issues, improving app stability by 20%</li>
              </ul>
            </div>
            
            {/* Columns 9-12: Dates (Right Aligned) */}
            <div className="col-start-9 col-end-13 col-tablet-2 col-mobile-4" style={{ textAlign: 'right' }}>
              <span className="text-body">May 2025 – Aug 2025</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
