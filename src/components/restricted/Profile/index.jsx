import { Helmet } from "react-helmet";

import { generateMeta } from "../../../lib/routes";

const Profile = () => {
  const meta = generateMeta("/profile");

  return (
    <div>
      <Helmet>{meta}</Helmet>

      <img
        src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
        alt="User face"
      />
      <h1>John Doe</h1>
      <p>@johndoe</p>
    </div>
  );
};

export default Profile;
