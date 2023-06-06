import { useEffect, useState } from "react";

import NewsList from "../NewsList/NewsList";
import { getCountryNewsApi } from "../../services/newsApi";
import { useParams } from "react-router-dom";
import { useSetIsLoading } from "../../context/LoaderProvider";

const CountryNewsList = () => {
  const { country } = useParams();
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const setIsLoading = useSetIsLoading();

  useEffect(() => {
    setIsLoading(true);
    getCountryNewsApi(country)
      .then((data) => setNews(data.articles))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [country, setIsLoading]);

  return (
    <>
      <h2>News list - {country} </h2>
      {error ? <h1>{error}</h1> : <NewsList news={news} />}
    </>
  );
};

export default CountryNewsList;
