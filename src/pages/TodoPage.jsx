import { useDispatch, useSelector } from "react-redux";

import PrioritySelect from "../components/PrioritySelect/PrioritySelect";
import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import { getTodo } from "../redux/todo/todoOpertions";
import { selectIsTodoExist } from "../redux/todo/todoSelectors";
import { useEffect } from "react";

const TodoPage = () => {
  const dispatch = useDispatch();
  const isTodoExist = useSelector(selectIsTodoExist);

  useEffect(() => {
    !isTodoExist && dispatch(getTodo());
  }, [dispatch, isTodoExist]);

  return (
    <>
      <ToDoForm />
      <PrioritySelect />
      <ToDoList />
    </>
  );
};

export default TodoPage;
