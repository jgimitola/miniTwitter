import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">🐦miniTwitter</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;