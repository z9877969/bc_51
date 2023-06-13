import { createContext, useContext, useState } from "react";

import Loader from "../components/Loader/Loader";
import { useSelector } from "react-redux";

const LoaderContext = createContext();

export const useSetIsLoading = () => useContext(LoaderContext);

const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const isLoadingTodo = useSelector((state) => state.todo.isLoading);
  return (
    <>
      {(isLoading || isLoadingTodo) && <Loader />}
      <LoaderContext.Provider value={setIsLoading}>
        {children}
      </LoaderContext.Provider>
    </>
  );
};

export default LoaderProvider;
