import axios from "axios";

const httpAPI = process.env.REACT_APP_HTTP_API;

let user = localStorage.getItem("user");
let jsonUser = user && JSON.parse(user);
let token = jsonUser?.token;

const getToken = () => {
  if (!token) {
    user = localStorage.getItem("user");
    jsonUser = user && JSON.parse(user);
    token = jsonUser?.token;
  }
  return token;
};

const get = async (endpoint) => {
  getToken();
  try {
    const url = `${httpAPI}/${endpoint}`;
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    };
    const response = await axios.get(url, config);
    return response;
  } catch (err) {
    return null;
  }
};

const post = async (endpoint, data) => {
  getToken();
  try {
    const url = `${httpAPI}/${endpoint}`;
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    };
    const response = await axios.post(url, data, config);
    return response;
  } catch (err) {
    return null;
  }
};

const remove = async (endpoint, body) => {
  getToken();
  try {
    const url = `${httpAPI}/${endpoint}`;
    console.log(token);
    console.log(body);
    const config = {
      data: body,

      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    };
    const response = await axios.delete(url, config);
    return response;
  } catch (err) {
    return null;
  }
};

export { get, post, remove };
