import axios from "axios";
import { BASE_URL } from "src/const";

const SERVER_URL = process.env.NODE_ENV === "development" ? BASE_URL : BASE_URL;

const instance = axios.create({
  baseURL: SERVER_URL,
});

export default instance;
