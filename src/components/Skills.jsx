import React from 'react';
import { motion } from 'framer-motion';

const skillsList = [
  { category: "LANGUAGES", items: "Java, Python, TypeScript, JavaScript, SQL" },
  { category: "FRAMEWORKS", items: "React, Next.js, Express.js, Flask, Spring Boot" },
  { category: "DATABASES", items: "PostgreSQL, MongoDB, Supabase" },
  { category: "CONCEPTS", items: "DSA, OOP, OS, DBMS, CN, Distributed Systems, Microservices" },
  { category: "TOOLS", items: "AWS, Git/GitHub, Postman, CI/CD, Docker" }
];

const Skills = () => {
  return (
    <section style={{ padding: 'var(--s-64) 0' }}>
      <div className="grid-container">
        <div className="col-span-full" style={{ marginBottom: 'var(--s-24)' }}>
          <span className="text-kicker">INDEX / SKILLS</span>
        </div>
        
        <div className="col-span-full">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', 
            gap: 'var(--s-40)',
            borderTop: '1px solid var(--ink-color)',
            borderBottom: '1px solid var(--ink-color)',
            padding: 'var(--s-40) 0'
          }}>
            {skillsList.map((skill, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <span className="text-caption" style={{ opacity: 1, color: 'var(--ink-color)', letterSpacing: '0.1em', display: 'block', marginBottom: 'var(--s-8)' }}>
                  {skill.category}
                </span>
                <span className="text-body">
                  {skill.items}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
