import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import NewsList from "../components/NewsList/NewsList";
import SearchForm from "../components/SearchForm/SearchForm";
import { getSearchNewsApi } from "../services/newsApi";

const SearchNewsPage = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useSearchParams();

  const query = search.get("query");
  const page = search.get("page");

  const changePage = () => {
    setSearch({ query, page: Number(page) + 1 });
  };

  useEffect(() => {
    if (!query) return;
    getSearchNewsApi(query, page)
      .then((data) => setNews(data.articles))
      .catch((err) => console.log("err :>> ", err.message));
  }, [query, page]);

  return (
    <>
      <SearchForm />
      <NewsList news={news} />
      {news.length > 0 && (
        <button type="button" onClick={() => changePage()}>
          More
        </button>
      )}
    </>
  );
};

export default SearchNewsPage;

// const useSP = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const search = new URLSearchParams(location.search);

//   const setSearch = (params) => {
//     const str = Object.entries(params).reduce((acc, [key, value]) => {
//       return (acc += `&${key}=${value}`);
//     }, "");
//     navigate({
//       ...location,
//       search: str,
//     });
//   };

//   return [search, setSearch];
// };
