import {
  Container,
  PictureContainer,
  ContentContainer,
  Header,
  Content,
  UserName,
  Date as DateTag,
  Buttons,
  Name,
} from "./styled";

const TweetCard = ({
  tweet: { id, user, content, date, likes, comments },
  removeTweet,
}) => {
  const dateObject = new Date(date);
  const MONTH = dateObject.getUTCMonth() + 1;
  const DAY = dateObject.getUTCDate();
  const YEAR = dateObject.getUTCFullYear();
  const formatedDate = `${DAY}/${MONTH}/${YEAR}`;

  return (
    <Container>
      <PictureContainer>
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
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
          <button>likes: {likes}</button>
          <button>comments: {comments?.length}</button>
          <button onClick={() => removeTweet(id)}>remove</button>
        </Buttons>
      </ContentContainer>
    </Container>
  );
};
export default TweetCard;
