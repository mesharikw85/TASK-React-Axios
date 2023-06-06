import axios from "axios";

const baseURL = "https://pets-react-query-backen.herokuapp.com";
const instance = axios.create({
  baseURL: baseURL,
});

export default instance;
