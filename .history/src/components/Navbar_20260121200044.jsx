import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h2 className="logo">
    <Link to="/">AutoDon</Link>
        </h2>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
        </nav>
    );
};

export default Navbar;