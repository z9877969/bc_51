import axios from "axios";
// https://newsapi.org/v2/top-headlines?country=us&apiKey=42ee593af8484a5a82756cb35b09ccd6

const API_KEY = "42ee593af8484a5a82756cb35b09ccd6";

axios.defaults.baseURL = "https://newsapi.org/v2";

export const getCountryNewsApi = (country) => {
  return axios
    .get("/top-headlines", {
      params: {
        country,
        apiKey: API_KEY,
      },
    })
    .then((res) => res.data);
};

// GET https://newsapi.org/v2/everything?q=bitcoin&apiKey=42ee593af8484a5a82756cb35b09ccd6

export const getSearchNewsApi = (query, page = 1) => {
  return axios
    .get("/everything", {
      params: {
        q: query,
        page,
        pageSize: 20,
        apiKey: API_KEY,
      },
    })
    .then((res) => res.data);
};
