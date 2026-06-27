import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "MERN Stack", "✦", "Data Structures", "✦", "Algorithms", "✦", "AI/ML Integration", "✦", 
  "Cloud Tools", "✦", "React", "✦", "Node.js", "✦", "Python", "✦"
];

const SkillsMarquee = () => {
  return (
    <section style={{ padding: '15vh 0', backgroundColor: 'var(--text-color)', color: 'var(--bg-color)', overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        style={{ display: 'inline-block' }}
      >
        <div style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
          {[...skills, ...skills].map((skill, index) => (
            <span key={index} style={{ 
              fontSize: 'clamp(3rem, 6vw, 5rem)', 
              fontFamily: 'var(--font-display)', 
              fontWeight: 800,
              color: skill === "✦" ? 'var(--accent-color)' : 'inherit'
            }}>
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsMarquee;
