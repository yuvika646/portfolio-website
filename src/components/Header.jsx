import React from 'react';

const Header = () => {
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
        
        <div className="col-desktop-4 col-tablet-2 col-mobile-1" style={{ display: 'flex', gap: 'var(--s-24)' }}>
          <a href="#work" className="text-kicker" style={{ textDecoration: 'none' }}>Work</a>
          <a href="#experience" className="text-kicker" style={{ textDecoration: 'none' }}>Experience</a>
          <a href="#about" className="text-kicker" style={{ textDecoration: 'none' }}>About</a>
        </div>
        
        <div className="col-desktop-4 col-tablet-2 col-mobile-2" style={{ textAlign: 'center' }}>
          <span className="text-masthead">YUVIKA KHANNA</span>
        </div>
        
        <div className="col-desktop-4 col-tablet-2 col-mobile-1" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <a href="#contact" className="text-kicker" style={{ textDecoration: 'none' }}>Contact</a>
        </div>

      </div>
    </header>
  );
};

export default Header;
