import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Helmet>
                <title>MiniTwitter</title>
                <meta name="description" content="MiniTwitter is a clon Twitter clon page" />
            </Helmet>

            <h1>MiniTwitter</h1>
            <h2>What's happening now.</h2>
            <p>Join twitter today</p>

            <Link to="/login"><button>Log In</button></Link>
            <Link to="/signup"><button>Sign Up</button></Link>

        </div>
    );
};

export default Root;