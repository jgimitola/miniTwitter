const SearchResult = (props) => {
  const meta = props.meta;

  return (
    <div>
      {meta}
      <h1>Search results for: </h1>
    </div>
  );
};

export default SearchResult;
