import { Link } from "react-router-dom";
import { Container, PictureContainer, ContentContainer } from "./styled";
const Tweet = ({tweet: {id, user, content, date, likes, comments}, removeTweet}) => {
  
    return (
      <Container>
          <PictureContainer>
            <img src="data:image/jpeg;base64,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" alt="" />
          </PictureContainer>
          <ContentContainer>
          <div className="header">
          <p className="user">@{user?.username}</p>
          <p className="date">{date}</p>
          </div>
          <div>
          <p className="content">{content}</p>
          </div>
          <p>likes: {likes} | comments {comments?.length}</p>
          <p><button onClick={()=>removeTweet(id)}>remove</button></p>
          </ContentContainer>
          
      </Container>
  );
  
};

export default Tweet;
