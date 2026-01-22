import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar'; // We'll create this

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > prevScrollPos && currentScrollPos > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const navLinks = [
    { name: 'About', to: '#about-section' },
    { name: 'Core Industries', to: '#core-section' },
    { name: 'Planets', to: '#planet-section' },
    { name: 'Citizen', to: '#citizen-section' },
    { name: 'Multiverse', to: '#multiverse-section' },
    { name: 'Contact', to: '#contact-section' },
  ];

  return (
    <nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
      <h2 className="logo">
        <Link to="/">LaTot</Link>
      </h2>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link
          to="/findtalent"
          className={location.pathname === '/findtalent' ? 'active' : ''}
        >
          Find Talent
        </Link>
        {navLinks.map((link) => (
          <a key={link.name} href={link.to}>
            {link.name}
          </a>
        ))}
      </div>

      <button className="nav-cta-btn">
        <a href="mailto:info@example.com">Join</a>
      </button>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
