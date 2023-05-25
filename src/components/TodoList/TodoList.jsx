import PropTypes from "prop-types";
import clsx from "clsx";
import s from "./TodoList.module.scss";

const TodoList = ({ todo = [], removeTodo, updateTodoStatus }) => {
  return (
    <ul className={s.container}>
      {todo.map(({ title, descr, id, date, priority, isDone }) => (
        <li key={id} className={s.toDoItem}>
          <p className={s.date}>{date}</p>
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
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      descr: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    })
  ),
  removeTodo: PropTypes.func.isRequired,
};

export default TodoList;
