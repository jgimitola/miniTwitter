import { useState } from "react";

const NewTweet = ({ addTweet }) => {
  const [content, setContent] = useState("");
  const handleClick = (event) => {
    event.preventDefault();
    const tweet = {
      id: Date.now(),
      content,
      user: {
        username: "jestrade",
      },
      likes: 0,
      comments: [],
      retweets: 0,
      date: Date.now(),
    };
    addTweet(tweet);
  };

  return (
    <form>
      <div>
        <textarea
          name="content"
          id="content"
          placeholder="say something"
          onChange={(event) => {
            setContent(event.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <button onClick={handleClick} type="button">
          send
        </button>
      </div>
    </form>
  );
};

export default NewTweet;
