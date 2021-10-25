import { useContext } from "react";
import { useHistory } from "react-router-dom";

import { TweetContext } from "../../../context/TweetContext";
import { Button } from "./styled";
import { ReactComponent as CommentIcon } from "../../../images/comment.svg";
import { ReactComponent as LikeIcon } from "../../../images/like.svg";
import { ReactComponent as RemoveIcon } from "../../../images/remove.svg";

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
  const history = useHistory();
  const dateObject = new Date(createdAt);
  const MONTH = dateObject.getUTCMonth() + 1;
  const DAY = dateObject.getUTCDate();
  const YEAR = dateObject.getUTCFullYear();
  const formatedDate = `${DAY}/${MONTH}/${YEAR}`;

  const { removeTweet, likeTweet } = useContext(TweetContext);

  const handlerClickTweet = () => {
    history.push(`/tweets/${_id}`);
  };

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
          <Button
            onClick={() => {
              likeTweet(_id);
            }}
          >
            <LikeIcon />
            {likes}
          </Button>
          <Button onClick={handlerClickTweet}>
            <CommentIcon />
            {comments?.length}
          </Button>
          <Button
            onClick={() => {
              removeTweet(_id);
              history.push("/home");
            }}
          >
            <RemoveIcon />
          </Button>
        </Buttons>
      </ContentContainer>
    </Container>
  );
};
export default TweetCard;
