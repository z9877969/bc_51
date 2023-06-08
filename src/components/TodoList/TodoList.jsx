import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todo = useSelector((state) => state.todo.items);
  const filter = useSelector((state) => state.todo.filter);

  const filteredTodo = useMemo(() => {
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  }, [filter, todo]);

  return (
    <ul className={s.container}>
      {filteredTodo.map((itemProps) => (
        <TodoItem key={itemProps.id} {...itemProps} />
      ))}
    </ul>
  );
};

export default TodoList;
