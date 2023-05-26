import PropTypes from "prop-types";
import TodoItem from "../TodoItem/TodoItem";
import clsx from "clsx";
import s from "./TodoList.module.scss";

const TodoList = ({ todo, removeTodo, updateTodoStatus }) => {
  return (
    <ul className={s.container}>
      {todo.map(({ title, descr, id, date, priority, isDone }) => (
        <TodoItem
          title={title}
          descr={descr}
          id={id}
          date={date}
          priority={priority}
          isDone={isDone}
          removeTodo={removeTodo}
          updateTodoStatus={updateTodoStatus}
        />
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
  updateTodoStatus: PropTypes.func.isRequired,
};

export default TodoList;

// const obj = {
//   a: "qwe",
// };

// const val1 = obj.a;
// const val2 = obj["a"];

// const key = "a";
// const val3 = obj[key];

// const obj2 = { b: "qwe" };

// const key2 = "b";
// const obj3 = { [key2]: "qwe" };
