import { Link } from 'react-router-dom';

const PrivateNav = () => {
    return (
        <div>
            <ul>
                <li><Link to="/home">🏡 Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/timeline/johndoe">TimeLine</Link></li>
                <li><Link to="/tweets/id">Tweet</Link></li>
                <li><Link to="/trending/topic">Trending</Link></li>
            </ul>
        </div>
    );
};

export default PrivateNav;