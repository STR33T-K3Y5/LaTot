import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h2 className="logo">gg
                <Link to="/">LaTot</Link>
            </h2>
            <Link to={'/findtalent'}>Find Talent</Link>
            <Link to={'/coreindustries'}>Core Industries</Link>
            <Link to={'/talentplanets'}>Talent Planets</Link>
            <Link to={'/citizen'}>Citizen</Link>
            <Link to={'/multiverse'}>Multiverse</Link>
            <button>
                <a href="mailto:info@latotofficial.com">Join</a>
            </button>
        </nav>
    );
};

export default Navbar;