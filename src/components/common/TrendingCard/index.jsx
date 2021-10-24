import {
  Container,
  ContentContainer,
  Header,
  Content,
  UserName,
  Date as DateTag,
  Name,
} from "./styled";

const TrendingCard = ({ user, content, createdAt }) => {
  const dateObject = new Date(createdAt);
  const MONTH = dateObject.getUTCMonth() + 1;
  const DAY = dateObject.getUTCDate();
  const YEAR = dateObject.getUTCFullYear();
  const formatedDate = `${DAY}/${MONTH}/${YEAR}`;

  return (
    <Container>
      <ContentContainer>
        <Header>
          <Name>{user.name || "John Doe"}</Name>
          <UserName>@{user?.username}</UserName> •{" "}
          <DateTag>{formatedDate}</DateTag>
        </Header>
        <Content>{content}</Content>
      </ContentContainer>
    </Container>
  );
};
export default TrendingCard;
