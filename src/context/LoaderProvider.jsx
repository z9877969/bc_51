import { createContext, useContext, useState } from "react";

import Loader from "../components/Loader/Loader";

const LoaderContext = createContext();

export const useSetIsLoading = () => useContext(LoaderContext);

const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {isLoading && <Loader />}
      <LoaderContext.Provider value={setIsLoading}>
        {children}
      </LoaderContext.Provider>
    </>
  );
};

export default LoaderProvider;
