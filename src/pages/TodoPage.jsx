import PrioritySelect from "../components/PrioritySelect/PrioritySelect";
import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import { useState } from "react";

const TodoPage = () => {
  const [isOpen, setIsOpen] = useState(false);
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
