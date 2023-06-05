import { useEffect, useRef, useState } from "react";

import clsx from "clsx";
import s from "./TodoItem.module.scss";

const TodoItem = ({
  title,
  descr,
  id,
  date,
  priority,
  isDone,
  updateTodoStatus,
  removeTodo,
}) => {
  const [count, setCount] = useState(0);

  const intervalIdRef = useRef(null);

  const stopTimer = () => {
    clearInterval(intervalIdRef.current);
  };

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, []);

  return (
    <li className={s.toDoItem}>
      <p className={s.date}>{date}</p>
      <p className={s.date}>Timer - {count}</p>
      <button type="button" onClick={stopTimer}>
        StopTimer
      </button>

      <h3 className={clsx(s.title, isDone && s.isDone)}>{title}</h3>
      <p className={clsx(s.priority, isDone && s.isDone)}>
        PRIORITY - {priority}
      </p>
      <p className={clsx(s.descr, isDone && s.isDone)}>{descr}</p>
      <label className={s.status}>
        <input
          type="checkbox"
          name="status"
          onChange={(e) => updateTodoStatus(id)}
          checked={isDone}
        />
        Done
      </label>
      <button className={s.todoBtn} onClick={(e) => removeTodo(id)}>
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
