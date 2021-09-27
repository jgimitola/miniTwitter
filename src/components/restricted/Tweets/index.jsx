import { useTweets } from "./../../../hooks/useTweets";
import Tweet from "./../Tweet";
import NewTweet from "./../NewTweet";

const Tweets = () => {
    const { tweets, removeTweet, addTweet } = useTweets();

    return (
        <>
            <NewTweet addTweet={addTweet} />
           {
               tweets?.length > 0 ?
                tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} removeTweet={removeTweet} />)
               : 
                <p>no data</p>
           }
        </>
    );
}

export default Tweets;