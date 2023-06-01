import { Component, useEffect, useRef, useState } from "react";

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

  const intervalIdRef = useRef(null); // {current: null}
  const itemRef = useRef(null);

  const stopTimer = () => {
    clearInterval(intervalIdRef.current);
  };

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      // console.log("setInterval");
    }, 1000);

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, []);

  // useEffect(() => {
  //   console.log("count prev");
  //   return () => {
  //     console.log("count", count);
  //   };
  // }, [count]);

  // console.log("itemRef :>> ", itemRef);

  return (
    <li ref={itemRef} className={s.toDoItem}>
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

class TodoItemClass extends Component {
  #intervalId = null;

  state = {
    count: 0,
  };

  componentDidMount() {
    this.#intervalId = setInterval(() => {
      this.setState((prev) => ({ count: prev.count + 1 }));
      console.log("count");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.#intervalId);
  }

  render() {
    const {
      title,
      descr,
      id,
      date,
      priority,
      isDone,
      updateTodoStatus,
      removeTodo,
    } = this.props;

    return (
      <li className={s.toDoItem}>
        <p className={s.date}>{date}</p>
        <p className={s.date}>Counter - {this.state.count}</p>

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
  }
}

export default TodoItem;
