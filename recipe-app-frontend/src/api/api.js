import axios from "axios";

let url = "https://ef8d-82-76-116-154.eu.ngrok.io";
const instance = axios.create({
  baseURL: url,
});

export default instance;
