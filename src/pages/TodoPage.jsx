import PrioritySelect from "../components/PrioritySelect/PrioritySelect";
import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";

const TodoPage = () => {
  return (
    <>
      <ToDoForm />
      <PrioritySelect />
      <ToDoList />
    </>
  );
};

export default TodoPage;
