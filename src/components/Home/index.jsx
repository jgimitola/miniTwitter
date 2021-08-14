import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MiniTwitter - Home</title>
                <meta name="description" content="Watch what is happening now. Read the stories from all around the world" />
            </Helmet>

            <h1>Home</h1>
            <form action="#">
                <input type="search" name="searchbar" id="searchbar" />
                <Link to="/search/results"><button>Search</button></Link>
            </form>
            <p id="write-tweet">Write what yout think</p>
            <textarea placeholder="Write a tweet" aria-describedby="write-tweet"></textarea>
        </div>
    );
};

export default Home;