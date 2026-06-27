import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  return (
    <section style={{ padding: 'var(--s-64) 0' }}>
      <div className="grid-container" style={{ rowGap: 'var(--s-40)' }}>
        
        <div className="col-desktop-4 col-tablet-2 col-mobile-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-numeral-giant">2ND</span>
            <span className="text-kicker" style={{ display: 'block', marginTop: 'var(--s-16)' }}>STATUSBREW HACKATHON</span>
          </motion.div>
        </div>

        <div className="col-desktop-4 col-tablet-2 col-mobile-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <span className="text-numeral-giant">15,000+</span>
            <span className="text-kicker" style={{ display: 'block', marginTop: 'var(--s-16)' }}>GLOBAL RANK, GOOGLE BIG CODE CHALLENGE</span>
          </motion.div>
        </div>

        <div className="col-desktop-4 col-tablet-2 col-mobile-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            <span className="text-numeral-giant">780+</span>
            <span className="text-kicker" style={{ display: 'block', marginTop: 'var(--s-16)' }}>DSA PROBLEMS SOLVED ON LEETCODE</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Stats;
