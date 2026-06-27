import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <header style={{ 
      height: '120px', 
      position: 'fixed', 
      top: 0, 
      width: '100%', 
      backgroundColor: 'var(--bg-color)', 
      borderBottom: '1px solid var(--ink-color)',
      zIndex: 100 
    }}>
      <div className="grid-container" style={{ height: '100%', alignItems: 'center' }}>
        
        {!isMobile && (
          <div className="col-desktop-4 col-tablet-2" style={{ display: 'flex', gap: 'var(--s-24)' }}>
            <a href="#work" className="text-kicker" style={{ textDecoration: 'none' }}>Work</a>
            <a href="#experience" className="text-kicker" style={{ textDecoration: 'none' }}>Experience</a>
            <a href="#about" className="text-kicker" style={{ textDecoration: 'none' }}>About</a>
          </div>
        )}

        {isMobile && (
          <div className="col-mobile-1" style={{ display: 'flex', alignItems: 'center' }}>
             <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink-color)', padding: 0 }}>
               {menuOpen ? <X size={28} /> : <Menu size={28} />}
             </button>
          </div>
        )}
        
        <div className={isMobile ? "col-mobile-3" : "col-desktop-4 col-tablet-2"} style={{ textAlign: isMobile ? 'right' : 'center' }}>
          <span className="text-masthead">YUVIKA KHANNA</span>
        </div>
        
        {!isMobile && (
          <div className="col-desktop-4 col-tablet-2" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <a href="#contact" className="text-kicker" style={{ textDecoration: 'none' }}>Contact</a>
          </div>
        )}

      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ 
              position: 'absolute', 
              top: '120px', 
              left: 0, 
              width: '100%', 
              backgroundColor: 'var(--bg-color)',
              borderBottom: '1px solid var(--ink-color)',
              overflow: 'hidden'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', padding: 'var(--s-24)', gap: 'var(--s-24)' }}>
              <a href="#work" className="text-kicker" style={{ textDecoration: 'none', fontSize: '14px' }} onClick={() => setMenuOpen(false)}>Work</a>
              <a href="#experience" className="text-kicker" style={{ textDecoration: 'none', fontSize: '14px' }} onClick={() => setMenuOpen(false)}>Experience</a>
              <a href="#about" className="text-kicker" style={{ textDecoration: 'none', fontSize: '14px' }} onClick={() => setMenuOpen(false)}>About</a>
              <a href="#contact" className="text-kicker" style={{ textDecoration: 'none', fontSize: '14px' }} onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
