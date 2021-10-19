import axios from 'axios';

const httpAPI = process.env.REACT_APP_HTTP_API;

const user = localStorage.getItem("user");
const jsonUser = user && JSON.parse(user);
const token = jsonUser?.token;

const get = async (endpoint) => {
    try {
        const url = `${httpAPI}/${endpoint}`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            }

        };
        const response = await axios.get(url, config);
        return response;
    } catch (err) {
        return null;
    }
};

const post = async (endpoint, data) => {
    try {
        const url = `${httpAPI}/${endpoint}`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        };
        const response = await axios.post(url, data, config);
        return response;
    } catch (err) {
        return null;
    }
};

export { get, post };