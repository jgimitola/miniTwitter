import { Helmet } from "react-helmet";

const Trend = () => {
    return (
        <div>
            <Helmet>
                <title>MiniTwitter - Trending</title>
                <meta name="description" content="Topic is trending on MiniTwitter, take a look" />

                <meta property="og:title" content="MiniTwitter - Trending" />
                <meta property="og:description" content="Topic is trending on MiniTwitter, take a look." />
            </Helmet>

            <h1>Trending page</h1>
        </div>
    );
};

export default Trend;