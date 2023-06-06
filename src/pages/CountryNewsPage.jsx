import { Outlet, useLocation, useNavigate } from "react-router-dom";

import CountryNewsNav from "../components/CountryNewsNav/CountryNewsNav";
import { Suspense } from "react";

const CountryNewsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const prevLocation = location.state; // null
  return (
    <>
      <h1>CountryNewsPage</h1>
      <button
        onClick={() => {
          navigate(prevLocation);
        }}
      >
        Go Back
      </button>
      <CountryNewsNav />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default CountryNewsPage;
