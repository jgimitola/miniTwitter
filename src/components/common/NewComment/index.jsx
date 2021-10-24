import { useState } from "react";

import PictureContainer from "../../common/PictureContainer";
import tweetService from "../../../services/tweetService";

import {
  Container,
  CreateTweetControls,
  TweetArea,
  TweetButton,
} from "./styled";

const NewComment = ({ setComments, comments, tweetId }) => {
  const [content, setContent] = useState("");

  const handleClick = async (event) => {
    event.preventDefault();
    const response = await tweetService.addComment(content, tweetId);
    console.log(response);
  };

  return (
    <Container>
      <PictureContainer>
        <img
          src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
          alt=""
        />
      </PictureContainer>
      <CreateTweetControls>
        <TweetArea
          name="content"
          id="content"
          placeholder="Comment something"
          maxLength={240}
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        ></TweetArea>

        <TweetButton onClick={handleClick} type="button">
          Comment
        </TweetButton>
      </CreateTweetControls>
    </Container>
  );
};

export default NewComment;
