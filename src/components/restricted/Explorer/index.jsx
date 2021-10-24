import { useState, useEffect } from "react";

import tweetService from "../../../services/tweetService";
import Page from "../../common/Page";
import TrendingCard from "../../common/TrendingCard";

const Explorer = ({ meta, setMainTarget, ...rest }) => {
  const [tweets, setTweets] = useState([]);

  const fetchTrendings = async () => {
    const res = await tweetService.getTrendings("CNN");
    console.log(res);
    setTweets(res.data);
  };

  useEffect(() => {
    fetchTrendings();
  }, []);

  return (
    <Page title="Explore" meta={meta} setMainTarget={setMainTarget}>
      {tweets?.length > 0 ? (
        tweets.map((tweet, i) => (
          <TrendingCard
            key={i}
            user={{ name: "CNN", username: "CNN" }}
            createdAt={tweet.created_at}
            content={tweet.text}
          />
        ))
      ) : (
        <p>There are no tweets</p>
      )}
    </Page>
  );
};
export default Explorer;
