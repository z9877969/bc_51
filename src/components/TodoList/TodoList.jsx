import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";
import { selectFilteredTodo } from "../../redux/todo/todoSelectors";
import { useSelector } from "react-redux";

const TodoList = () => {
  const filteredTodo = useSelector(selectFilteredTodo);

  console.log("Render TodoList");

  return (
    <ul className={s.container}>
      {filteredTodo.map((itemProps) => (
        <TodoItem key={itemProps.id} {...itemProps} />
      ))}
    </ul>
  );
};

export default TodoList;
