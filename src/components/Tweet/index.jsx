import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Tweet = () => {

    return (
        <div >
            <Helmet>
                <title>MiniTwitter - Tweet</title>
                <meta name="description" content="Basic Tweet description" />
            </Helmet>

            <h1>Tweet title</h1>
            <h2><Link to="/profile">@johndoe</Link></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam itaque, facere, veritatis mollitia, rem hic debitis ab in molestiae repudiandae explicabo.</p>
            <Link to="/timeline/johndoe">Back to Timeline</Link>
        </div>
    );
};

export default Tweet;