import { useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useSetIsLoading } from "../context/LoaderProvider";

export const useTodo = () => {
  const setIsLoading = useSetIsLoading();
  const [todo, setTodo] = useLocalStorage([], "todo");

  const addTodo = useCallback(
    (todo) => {
      const newTodo = { ...todo, isDone: false, id: Date.now() };
      setIsLoading(true);
      setTimeout(() => {
        setTodo((prevTodo) => [...prevTodo, newTodo]);
        setIsLoading(false);
      }, 1000);
    },
    [setTodo, setIsLoading]
  );

  const removeTodo = useCallback(
    (id) => {
      setTodo((prevTodo) => prevTodo.filter((el) => el.id !== id));
    },
    [setTodo]
  );

  const updateTodoStatus = useCallback(
    (id) => {
      setTodo((prevTodo) =>
        prevTodo.map((el) =>
          el.id !== id ? el : { ...el, isDone: !el.isDone }
        )
      );
    },
    [setTodo]
  );

  return { todo, addTodo, removeTodo, updateTodoStatus };
};
