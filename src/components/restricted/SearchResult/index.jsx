import { Helmet } from "react-helmet";

import { generateMeta } from "../../../lib/routes";

const SearchResult = () => {
  const meta = generateMeta("/search/results");

  return (
    <div>
      <Helmet>{meta}</Helmet>

      <h1>Search results for: </h1>
    </div>
  );
};

export default SearchResult;
