import { useState } from "react";

import tweetService from "../services/tweetService";

import { error } from "../lib/ui/Toasts";

export const useTweets = () => {
  const [tweets, setTweets] = useState([]);

  const addTweet = async (tweet) => {
    const newTweet = await tweetService.addTweet(tweet);
    const tmpTweets = [...tweets];
    const user = JSON.parse(localStorage.getItem("user"));
    const newUser = {
      _id: newTweet.user,
      name: user.name,
      username: user.username,
    };
    newTweet.user = newUser;
    tmpTweets.unshift(newTweet);
    setTweets(tmpTweets);
  };

  const removeTweet = async (id) => {
    const body = {
      tweetId: id,
    };
    const response = await tweetService.deleteTweet(body);
    if (response != null) {
      const tmpTweets = tweets.filter((tweet) => id !== tweet._id);
      setTweets(tmpTweets);
    } else {
      error("You don't own this tweet");
    }
  };

  const getTweets = async () => {
    const response = await tweetService.getTweetsList();
    const tmpTweets = response.data;
    setTweets(tmpTweets);
  };

  const likeTweet = async (id) => {
    const body = {
      like: 0,
      tweetId: id,
    };
    await tweetService.likeTweet(body);
    await getTweets();
  };

  return {
    tweets,
    removeTweet,
    addTweet,
    getTweets,
    likeTweet,
  };
};
