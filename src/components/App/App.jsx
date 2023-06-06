import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";

// import CounterPage from "../../pages/CounterPage";
// import CountryNewsList from "../CountryNewsList/CountryNewsList";
// import CountryNewsPage from "../../pages/CountryNewsPage";
// import HomePage from "../../pages/HomePage";
import Loader from "../Loader/Loader";
import MainLayout from "../MainLayout/MainLayout";

// import SearchNewsPage from "../../pages/SearchNewsPage";
// import TodoPage from "../../pages/TodoPage";

const CounterPage = lazy(() => import("../../pages/CounterPage"));
const CountryNewsPage = lazy(() => import("../../pages/CountryNewsPage"));
const HomePage = lazy(() => import("../../pages/HomePage"));
const SearchNewsPage = lazy(() => import("../../pages/SearchNewsPage"));
const TodoPage = lazy(() => import("../../pages/TodoPage"));
const CountryNewsList = lazy(() =>
  import("../CountryNewsList/CountryNewsList")
);

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="todo" element={<TodoPage />} />
          <Route path="country-news" element={<CountryNewsPage />}>
            <Route path=":country" element={<CountryNewsList />} />
          </Route>
          <Route path="search-news" element={<SearchNewsPage />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};

export default App;
