import { get, post, remove } from './http'

const getTweetsList = async () => {
    const json = await get("tweets");
    return json.data;

};

const addTweet = async (tweet) => {
    const json = await post("tweets", tweet);
    return json.data
};

const deleteTweet = async (body) => {
    const json = await remove("tweets", body);
    return json
};

const tweetService = { getTweetsList, addTweet, deleteTweet }

export default tweetService