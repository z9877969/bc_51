import { useEffect, useState } from "react";

export const useLocalStorage = (initalValue, key) => {
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem(key)) || initalValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return [data, setData];
};
