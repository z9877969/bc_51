import { removeTodo, updateTodoStatus } from "../../redux/todo/todoOpertions";
import { useEffect, useState } from "react";

import clsx from "clsx";
import s from "./TodoItem.module.scss";
import { useDispatch } from "react-redux";

const TodoItem = ({ title, descr, id, date, priority, isDone }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <li className={s.toDoItem}>
      <p className={s.date}>{date}</p>
      <p className={s.date}>Timer - {count}</p>

      <h3 className={clsx(s.title, isDone && s.isDone)}>{title}</h3>
      <p className={clsx(s.priority, isDone && s.isDone)}>
        PRIORITY - {priority}
      </p>
      <p className={clsx(s.descr, isDone && s.isDone)}>{descr}</p>
      <label className={s.status}>
        <input
          type="checkbox"
          name="status"
          onChange={(e) => {
            dispatch(updateTodoStatus({ isDone: e.target.checked, id }));
          }}
          checked={isDone}
        />
        Done
      </label>
      <button className={s.todoBtn} onClick={(e) => dispatch(removeTodo(id))}>
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
