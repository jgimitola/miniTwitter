const PasswordRecovery = (props) => {
  const meta = props.meta;

  return (
    <div>
      {meta}

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
