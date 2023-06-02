import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

export const useSetIsLoading = () => useContext(LoaderContext);

const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
        >
          <h1 style={{ color: "#fff", fontSize: 48 }}>Loading...</h1>
        </div>
      )}
      <LoaderContext.Provider value={setIsLoading}>
        {children}
      </LoaderContext.Provider>
    </>
  );
};

export default LoaderProvider;
