import { Helmet } from "react-helmet";

import { generateMeta } from "../../../lib/routes";

const PasswordRecovery = () => {
  const meta = generateMeta("/passwordrecovery");

  return (
    <div>
      <Helmet>{meta}</Helmet>

      <h1>Find your Twitter account</h1>
      <label for="pr-emailField">
        Enter your email, phone number, or username.
      </label>
      <form action="#">
        <input id="pr-emailField" type="email" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default PasswordRecovery;
