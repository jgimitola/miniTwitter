import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { generateMeta } from "../../../lib/routes";

const Tweet = () => {
  const meta = generateMeta("/tweets/:id");

  return (
    <div>
      <Helmet>{meta}</Helmet>

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
