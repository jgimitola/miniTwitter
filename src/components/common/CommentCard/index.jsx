import tweetService from "../../../services/tweetService";

import {
  Container,
  ContentContainer,
  Header,
  Content,
  UserName,
  Buttons,
  Name,
} from "./styled";
import PictureContainer from "../PictureContainer";
import { Button } from "../TweetCard/styled";
import { ReactComponent as RemoveIcon } from "../../../images/remove.svg";

/**
 *
 * remove option doesn't work because there is no endpoint available
 *
 */
const CommentCard = ({
  comment: { _id, user, comment },
  setComments,
  comments,
  tweetId,
}) => {
  const handlerRemove = async () => {
    const response = tweetService.removeComment(tweetId, _id);
    if (response != null) {
      const newComments = comments.filter((comment) => comment._id !== _id);
      setComments(newComments);
    }
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
          <UserName>@{user?.username}</UserName>{" "}
        </Header>
        <Content>{comment}</Content>
        <Buttons>
          <Button onClick={handlerRemove}>
            <RemoveIcon />
          </Button>
        </Buttons>
      </ContentContainer>
    </Container>
  );
};
export default CommentCard;
