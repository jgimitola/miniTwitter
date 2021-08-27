import { Helmet } from "react-helmet";

import { generateMeta } from "../../../lib/routes";

const Trend = () => {
  const meta = generateMeta("/trending/:topic");

  return (
    <div>
      <Helmet>{meta}</Helmet>

      <h1>Trending page</h1>
    </div>
  );
};

export default Trend;
