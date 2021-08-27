import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { generateMeta } from "../../../lib/routes";

const SingUp = () => {
  const meta = generateMeta("/signup");

  return (
    <div>
      <Helmet>{meta}</Helmet>

      <h1>Create your account</h1>
      <form action="#">
        <label htmlFor="ca-usernameField">Username:</label>
        <input id="ca-usernameField" type="text" />

        <label htmlFor="ca-passwordField">Password:</label>
        <input id="ca-passwordField" type="password" />

        <label htmlFor="ca-dateField">Date of birth:</label>
        <input id="ca-dateField" type="date" />

        <input type="submit" value="Sign Up" />
      </form>
      <p>
        Have an account already? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
};

export default SingUp;
