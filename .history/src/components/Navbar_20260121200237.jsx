import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h2 className="logo">
                <Link to="/">AutoDon</Link>
            </h2>
            <Link to={'/findtalent'}>Find Talent</Link>
            <Link to={'/about'}>Core Industries</Link>
            <Link to={'/about'}>Talent Planets</Link>
            <Link to={'/about'}>Cit</Link>
            <Link to={'/about'}>Core Industries</Link>
        </nav>
    );
};

export default Navbar;