import { Link } from "react-router-dom";

const Root = (props) => {
  const meta = props.meta;

  return (
    <div>
      {meta}

      <h1>MiniTwitter</h1>
      <h2>What's happening now.</h2>
      <p>Join twitter today</p>

      <Link to="/login">
        <button>Log In</button>
      </Link>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
    </div>
  );
};

export default Root;
