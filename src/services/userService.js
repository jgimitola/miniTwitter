import { post } from "./http";

const loginUser = async (username, password) => {
  const user = {
    username,
    password,
  };
  const json = await post("users/login", user);
  return json;
};

const signUpUser = async (
  name,
  email,
  username,
  password,
  passwordConfirmation
) => {
  const newUser = {
    name,
    email,
    username,
    password,
    passwordConfirmation,
  };

  const json = await post("users", newUser);
  return json;
};

export { loginUser, signUpUser };
