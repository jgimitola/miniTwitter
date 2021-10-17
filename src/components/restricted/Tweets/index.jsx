import { useTweets } from "./../../../hooks/useTweets";
import NewTweet from "./../NewTweet";
import TweetCard from "../../common/TweetCard";

const Tweets = () => {
  const { tweets, removeTweet, addTweet } = useTweets();

  return (
    <>
      <NewTweet addTweet={addTweet} />
      {tweets?.length > 0 ? (
        tweets.map((tweet) => (
          <TweetCard key={tweet.id} tweet={tweet} removeTweet={removeTweet} />
        ))
      ) : (
        <p>no data</p>
      )}
    </>
  );
};

export default Tweets;
