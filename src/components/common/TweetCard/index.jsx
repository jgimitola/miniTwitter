import { useContext } from "react";

import { TweetContext } from "../../../context/TweetContext";

import {
  Container,
  ContentContainer,
  Header,
  Content,
  UserName,
  Date as DateTag,
  Buttons,
  Name,
} from "./styled";
import PictureContainer from "../PictureContainer";

const TweetCard = ({
  tweet: { _id, user, content, createdAt, likes, comments },
}) => {
  const dateObject = new Date(createdAt);
  const MONTH = dateObject.getUTCMonth() + 1;
  const DAY = dateObject.getUTCDate();
  const YEAR = dateObject.getUTCFullYear();
  const formatedDate = `${DAY}/${MONTH}/${YEAR}`;

  const { removeTweet, likeTweet } = useContext(TweetContext);

  return (
    <Container>
      <PictureContainer>
        <img
          src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
          alt=""
        />
      </PictureContainer>
      <ContentContainer>
        <Header>
          <Name>{user.name || "John Doe"}</Name>
          <UserName>@{user?.username}</UserName> •{" "}
          <DateTag>{formatedDate}</DateTag>
        </Header>
        <Content>{content}</Content>
        <Buttons>
          <button
            onClick={() => {
              likeTweet(_id);
            }}
          >
            likes: {likes}
          </button>
          <button>comments: {comments?.length}</button>
          <button onClick={() => removeTweet(_id)}>remove</button>
        </Buttons>
      </ContentContainer>
    </Container>
  );
};
export default TweetCard;
