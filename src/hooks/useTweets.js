import { useState } from "react";
import tweetService from "../services/tweetService"

export const useTweets = () => {
    const [tweets, setTweets] = useState([]);

    const addTweet = async (tweet) => {
        const newTweet = await tweetService.addTweet(tweet);
        const tmpTweets = [...tweets];
        const user = JSON.parse(localStorage.getItem("user"));
        const newUser = {
            _id: newTweet.user,
            name: user.name,
            username: user.username
        }
        newTweet.user = newUser;
        tmpTweets.unshift(newTweet);
        console.log(newTweet)
        setTweets(tmpTweets);
    };

    const removeTweet = async (id) => {
        const body = {
            "tweetId": id
        }
        const response = await tweetService.deleteTweet(body)
        if (response != null) {
            const tmpTweets = tweets.filter((tweet) => id !== tweet._id);
            setTweets(tmpTweets);
        } else {
            alert("Parece que intentas eliminar un tweet que no es tuyo")
        }
    };

    const getTweets = async () => {
        const response = await tweetService.getTweetsList();
        const tmpTweets = response.data
        setTweets(tmpTweets);
    }

    return {
        tweets,
        removeTweet,
        addTweet,
        getTweets
    }
}