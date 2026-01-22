import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    // Scroll hide/show logic
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav className={`navbar ${showNav ? 'visible' : 'hidden'}`}>
            <div className="nav-inner">
                <h2 className="logo">
                    <Link to="/">LaTot</Link>
                </h2>

                <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <div className="nav-item dropdown">
                        <Link
                            to="/findtalent"
                            className={location.pathname === '/findtalent' ? 'active' : ''}
                        >
                            Find Talent
                        </Link>

                        <div className="dropdown-menu">
                            <a href="#about-section">About</a>
                            <a href="#core-section">Core Industries</a>
                            <a href="#planet-section">Planets</a>
                            <a href="#citizen-section">Citizen</a>
                            <a href="#multiverse-section">Multiverse</a>
                            <a href="#contact-section">Contact</a>
                        </div>
                    </div>

                    <button className="nav-cta-btn">
                        <a href="mailto:info@example.com">Join</a>
                    </button>
                </div>

                <div
                    className={`hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span />
                    <span />
                    <span />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
