import { Component } from "react";
import clsx from "clsx";
import s from "./TodoItem.module.scss";

class TodoItem extends Component {
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
