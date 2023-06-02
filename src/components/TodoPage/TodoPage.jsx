import { useCallback, useMemo, useState } from "react";

import PrioritySelect from "../PrioritySelect/PrioritySelect";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { useIsOpenContext } from "../../context/IsOpenProvider";
import { useTodo } from "../../hooks/useTodo";

const TodoPage = () => {
  const { setIsOpen } = useIsOpenContext();

  const { todo, addTodo, removeTodo, updateTodoStatus } = useTodo();
  const [filter, setFilter] = useState("all");

  const changePriority = useCallback((e) => {
    setFilter(e.target.value);
  }, []);

  const filteredTodo = useMemo(() => {
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter); // iteration
  }, [todo, filter]);

  console.log("Render Page");

  return (
    <>
      <button type="button" onClick={() => setIsOpen((p) => !p)}>
        Change isOpen
      </button>
      <ToDoForm addTodo={addTodo} />
      <PrioritySelect filter={filter} changeFilter={changePriority} />
      <ToDoList
        todo={filteredTodo}
        removeTodo={removeTodo}
        updateTodoStatus={updateTodoStatus}
      />
    </>
  );
};

export default TodoPage;
// HOC high order component

// const useCb = (cb, deps) => {
//   const cachedCb = useMemo(() => cb, deps);
//   return cachedCb;
// };
