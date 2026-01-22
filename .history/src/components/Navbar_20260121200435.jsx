import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h2 className="logo">
                <Link to="/">AutoDon</Link>
            </h2>
            <Link to={'/findtalent'}>Find Talent</Link>
            <Link to={'/coreindustries'}>Core Industries</Link>
            <Link to={'/ta'}>Talent Planets</Link>
            <Link to={'/about'}>Citizen</Link>
            <Link to={'/about'}>Multiverse</Link>
        </nav>
    );
};

export default Navbar;