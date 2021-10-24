import { get, post, remove } from "./http";

const getTweetsList = async () => {
  const json = await get("tweets");
  return json.data;
};

const addTweet = async (tweet) => {
  const json = await post("tweets", tweet);
  return json.data;
};

const deleteTweet = async (body) => {
  const json = await remove("tweets", body);
  return json;
};

const likeTweet = async (body) => {
  const json = await post("tweets/likes", body);
  return json;
};

const getTrendings = async (account) => {
  const json = await get(`tweets/external/${account}`);
  return json;
}

const removeComment = async (tweetId, commentId) => {
  const body = {
    tweetId,
    commentId
  };
  const json = await remove("tweets/comments", body);
  return json;

};

const addComment = async (comment, tweetId) => {
  const body = {
    tweetId,
    comment
  };
  const json = await post("tweets/comments", body);
  return json;

};

const tweetService = { getTweetsList, addTweet, deleteTweet, likeTweet, getTrendings, removeComment, addComment };

export default tweetService;
