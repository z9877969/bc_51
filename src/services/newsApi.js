// GET https://newsapi.org/v2/everything?q=bitcoin&apiKey=42ee593af8484a5a82756cb35b09ccd6
import axios from "axios";

const API_KEY = "42ee593af8484a5a82756cb35b09ccd6";

axios.defaults.baseURL = "https://newsapi.org/v2";

export const getSearchNewsApi = (query, page = 1) => {
  return axios
    .get("/everything", {
      params: {
        q: query,
        page,
        pageSize: 10,
        apiKey: API_KEY,
      },
    })
    .then((response) => response.data);
  //   response = {data: info}
};
