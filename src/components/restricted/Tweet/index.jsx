import { Link } from "react-router-dom";

const Tweet = ({ meta }) => {
  return (
    <div>
      {meta}

      <h1>Tweet title</h1>
      <h2>
        <Link to="/profile">@johndoe</Link>
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam itaque,
        facere, veritatis mollitia, rem hic debitis ab in molestiae repudiandae
        explicabo.
      </p>
      <Link to="/timeline/johndoe">Back to Timeline</Link>
    </div>
  );
};

export default Tweet;
