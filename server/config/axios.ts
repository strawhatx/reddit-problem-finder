import _axios from "axios";

const reddit_uri = process.env.REDDIT_URI;
const reddit_token = process.env.REDDIT_ACCESS;

const coins_api = _axios.create({
  baseURL: coins_uri,
  headers: { "x-access-token": coins_token ?? "" },
  withCredentials: true,
});

//reddit_api.defaults.headers.get["x-access-token"] = "x-access-token"


export { reddit_api };
