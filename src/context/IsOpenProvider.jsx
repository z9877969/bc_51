import { createContext, useContext, useState } from "react";

export const IsOpenContext = createContext();

export const useIsOpenContext = () => {
    const value = useContext(IsOpenContext);
    return value
}

const IsOpenProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <IsOpenContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </IsOpenContext.Provider>
  );
};

export default IsOpenProvider;

// IsOpenContext.Provider()
