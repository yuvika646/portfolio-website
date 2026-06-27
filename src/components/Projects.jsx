import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    id: "01",
    title: "CareerForge (AI Resume Builder)",
    description: "Full-stack AI app built with Next.js and Supabase. Integrated Llama 3 via Groq API for real-time AI suggestions, achieving 90% reduction in inference latency.",
    tags: ["NEXT.JS", "SUPABASE", "LLAMA 3", "GROQ API"],
    live: "https://career-forge-five.vercel.app",
    repo: "https://github.com/yuvika646/CareerForge"
  },
  {
    id: "02",
    title: "ContextCLI (RAG System)",
    description: "Distributed Retrieval-Augmented Generation system for offline semantic search over codebases. Data pipeline using Apache Tika for parsing and Ollama for embedding generation.",
    tags: ["PYTHON", "OLLAMA", "PGVECTOR", "APACHE TIKA"],
    live: "#",
    repo: "https://github.com/yuvika646/ContextCLI",
  },
  {
    id: "03",
    title: "RFID Student Portal",
    description: "IoT-enabled attendance management system integrating RFID hardware with a Flask backend. Normalized SQL schema for real-time attendance tracking.",
    tags: ["FLASK", "SQL", "RFID/IoT"],
    live: "#",
    repo: "#"
  },
  {
    id: "04",
    title: "Upcoming Project",
    description: "Currently building a highly scalable microservices architecture. Check back soon for the live deployment and source code.",
    tags: ["REACT", "NODE.JS", "DOCKER"],
    live: "#",
    repo: "#"
  }
];

const ProjectBox = ({ project }) => {
  return (
    <motion.div 
      className="box-cartoon"
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <span className="text-kicker" style={{ marginBottom: 'var(--s-8)' }}>PLATE {project.id}</span>
      <h3 className="text-h3" style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: 'var(--s-16)' }}>
        {project.title}
      </h3>
      <p className="text-body" style={{ marginBottom: 'var(--s-16)', flexGrow: 1 }}>
        {project.description}
      </p>
      <p className="text-caption" style={{ marginBottom: 'var(--s-24)', fontWeight: 'bold', opacity: 1 }}>
        {project.tags.join(" · ")}
      </p>
      <div style={{ display: 'flex', gap: 'var(--s-16)' }}>
        <a href={project.live} className="btn-cartoon" style={{ flex: 1 }}>Live Demo</a>
        <a href={project.repo} className="btn-cartoon" style={{ flex: 1 }}>GitHub</a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="work" style={{ padding: 'var(--s-64) 0' }}>
      <hr className="hard-divider" style={{ marginBottom: 'var(--s-40)' }} />
      <div className="grid-container" style={{ marginBottom: 'var(--s-40)' }}>
        <div className="col-span-full">
          <span className="text-kicker">SELECTED WORK</span>
        </div>
      </div>
      
      <div className="grid-container">
        <div className="col-span-full" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--s-40)'
        }}>
          {projectsData.map((project) => (
            <ProjectBox key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
