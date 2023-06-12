import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import PrioritySelect from "../components/PrioritySelect/PrioritySelect";
import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import { getTodo } from "../redux/todo/todoOpertions";

const TodoPage = () => {
  const dispatch = useDispatch();
  const isTodoExist = useSelector((state) => state.todo.items.length > 0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    !isTodoExist && dispatch(getTodo());
  }, [dispatch, isTodoExist]);

  return (
    <>
      {isOpen && <h1>Modal - {`${isOpen}`}</h1>}
      <button onClick={() => setIsOpen((p) => !p)}>Toggle modal</button>
      <ToDoForm />
      <PrioritySelect />
      <ToDoList />
    </>
  );
};

export default TodoPage;
