import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h2 className="logo">
                <Link to="/">LaTot</Link>
            </h2>
            <Link to={'/findtalent'}>Find Talent</Link>
            <button className='na'>
                <a href="mailto:info@latotofficial.com">Join</a>
            </button>
        </nav>
    );
};

export default Navbar;