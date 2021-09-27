import { useState } from "react";
import data from "./../mocks/tweets.json";

export const useTweets = () => {
    const [tweets, setTweets] = useState(data);

    const addTweet = (tweet) => {
        const tmpTweets = [...tweets];
        tmpTweets.push(tweet);
        setTweets(tmpTweets);
    };

    const removeTweet = (id) => {
        const tmpTweets = tweets.filter((tweet)=> id !== tweet.id );
        setTweets(tmpTweets);
    };
    
    return {
        tweets,
        removeTweet,
        addTweet
    }
}