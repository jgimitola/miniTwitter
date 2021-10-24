import { createContext } from "react";

import { useTweets } from "../hooks/useTweets";

const TweetContext = createContext();

const TweetProvider = (props) => {
  const { tweets, removeTweet, addTweet, getTweets } = useTweets();

  return (
    <TweetContext.Provider value={{ tweets, removeTweet, addTweet, getTweets }}>
      {props.children}
    </TweetContext.Provider>
  );
};

export { TweetContext, TweetProvider };
