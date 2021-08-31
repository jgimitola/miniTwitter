const Profile = (props) => {
  const meta = props.meta;

  return (
    <div>
      {meta}

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
