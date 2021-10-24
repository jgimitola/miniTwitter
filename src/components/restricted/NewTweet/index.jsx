import { useState, useContext } from "react";

import { TweetContext } from "../../../context/TweetContext";
import PictureContainer from "../../common/PictureContainer";

import {
  Container,
  CreateTweetControls,
  TweetArea,
  TweetButton,
} from "../NewTweet/styled";

const NewTweet = () => {
  const [content, setContent] = useState("");

  const { addTweet } = useContext(TweetContext);

  const handleClick = (event) => {
    event.preventDefault();
    if (!!content) {
      const tweet = {
        content: content,
      };
      addTweet(tweet);
      setContent("");
    }
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
          value={content}
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
