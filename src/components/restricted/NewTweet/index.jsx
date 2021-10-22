import { useState } from "react";
import PictureContainer from "../../common/PictureContainer";

import {
  Container,
  CreateTweetControls,
  TweetArea,
  TweetButton,
} from "../NewTweet/styled";

const NewTweet = ({ addTweet }) => {
  const [content, setContent] = useState("");
  const handleClick = (event) => {
    event.preventDefault();
    const tweet = {
      id: Date.now(),
      content,
      user: {
        username: "jestrade",
      },
      likes: 0,
      comments: [],
      retweets: 0,
      date: Date.now(),
    };
    addTweet(tweet);
  };

  return (
    <Container>
      <PictureContainer>
        <img
          src="https://pbs.twimg.com/profile_images/1279589529012383745/5RZMRIRd_400x400.jpg"
          alt=""
        />
      </PictureContainer>
      <CreateTweetControls>
        <TweetArea
          name="content"
          id="content"
          placeholder="What's happening?"
          maxLength={240}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        ></TweetArea>

        <TweetButton onClick={handleClick} type="button">
          Tweet
        </TweetButton>
      </CreateTweetControls>
    </Container>
  );
};

export default NewTweet;
