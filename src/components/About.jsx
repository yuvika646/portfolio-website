import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" style={{ padding: 'var(--s-64) 0' }}>
      <hr className="hard-divider" style={{ marginBottom: 'var(--s-40)' }} />
      
      <div className="grid-container">
        {/* Text spans columns 3–9 */}
        <motion.div 
          className="col-start-3 col-end-10 col-tablet-6 col-mobile-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-pullquote">
            "Skilled in Data Structures & Algorithms, Object-Oriented Programming, 
            and Distributed Systems — experienced in building scalable AI-powered 
            and cloud-based applications with a focus on performance optimization 
            and real-world problem solving."
          </p>
        </motion.div>
      </div>

    </section>
  );
};

export default About;
