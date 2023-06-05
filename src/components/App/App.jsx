// import Counter from "../Counter/Counter";
import {
  Link,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";

import CounterPage from "../../pages/CounterPage";
import CountryNewsList from "../CountryNewsList/CountryNewsList";
import CountryNewsPage from "../../pages/CountryNewsPage";
import Header from "../Header/Header";
import HomePage from "../../pages/HomePage";
import TodoPage from "../../pages/TodoPage";
import { useEffect } from "react";

const BgWrapper = ({ children }) => {
  return (
    <div style={{ backgroundColor: "grey", minHeight: "100vh" }}>
      {children}
    </div>
  );
};

const MainLayout = () => {
  return (
    <>
      <BgWrapper>
        <Header />
        <Outlet />
      </BgWrapper>
    </>
  );
};
const TshortsPage = () => {
  const { type } = useParams();
  console.log("type :>> ", type);
  useEffect(() => {
    // fetch(type)
  });
  return (
    <>
      <h1>TshortsPage - {type}</h1>
    </>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="todo" element={<TodoPage />} />
          <Route path="tshorts/:type" element={<TshortsPage />} />
          <Route path="country-news" element={<CountryNewsPage />}>
            <Route path=":country" element={<CountryNewsList />} />
            {/* <Route path="ua" element={<CountryNewsList country={"UA"} />} />
          <Route path="pl" element={<CountryNewsList country={"PL"} />} />
          <Route path="fr" element={<CountryNewsList country={"FR"} />} />
          <Route path="us" element={<CountryNewsList country={"US"} />} /> */}
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};

export default App;

// const R = ({ path, element }) => {
//   const { pathname } = useLocation();
//   if (path !== pathname) return null;
//   return element;
// };
