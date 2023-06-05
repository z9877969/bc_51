import { useCallback, useMemo, useState } from "react";

import PrioritySelect from "../components/PrioritySelect/PrioritySelect";
import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import { useTodo } from "../hooks/useTodo";

const TodoPage = () => {
  const { todo, addTodo, removeTodo, updateTodoStatus } = useTodo();
  const [filter, setFilter] = useState("all");

  const changePriority = useCallback((e) => {
    setFilter(e.target.value);
  }, []);

  const filteredTodo = useMemo(() => {
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  }, [todo, filter]);

  return (
    <>
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
