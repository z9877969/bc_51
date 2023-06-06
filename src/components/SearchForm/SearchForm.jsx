import { useNavigate, useSearchParams } from "react-router-dom";

import { useState } from "react";

const SearchForm = () => {
  //   const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [search, setSearch] = useSearchParams();

  console.log("search :>> ", search);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSearch(input);
    // navigate({
    //   pathname: "/search-news",
    //   search: "?search=" + input,
    // });
    setSearch({ query: input, page: 1 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
