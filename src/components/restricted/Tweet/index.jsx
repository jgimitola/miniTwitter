import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Page from "../../common/Page";
import { TweetContext } from "../../../context/TweetContext";
import TweetCard from "../../common/TweetCard";
import NewComment from "../../common/NewComment";
import CommentCard from "../../common/CommentCard";
import { Container, Center } from "./styled";

/**
 * When comments is added we didn't find a way to refresh and show the updated list of comments. In order
 * to refresh the list you have to click home and enter again to the comments.
 *
 * When tweet page with the corresponding id is loaded an error occurs because the tweet is not loaded, if the api
 * had a working endpoint to get an specific tweet we could have fix this.
 *
 */
const Tweet = ({ meta, setMainTarget, ...rest }) => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const { tweets } = useContext(TweetContext);

  let tweet;
  tweet = tweets.find((t) => t._id === id);

  useEffect(() => {
    setComments(tweet.comments);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page title="Tweet" meta={meta} setMainTarget={setMainTarget}>
      <TweetCard tweet={tweet} />
      <Container>
        <NewComment
          tweetId={id}
          setComments={setComments}
          comments={comments}
        />
        {comments?.length > 0 ? (
          comments.map((comment, i) => (
            <CommentCard
              key={comment._id}
              comment={comment}
              setComments={setComments}
              comments={comments}
              tweetId={id}
            />
          ))
        ) : (
          <Center>There are no comments</Center>
        )}
      </Container>
    </Page>
  );
};

export default Tweet;
