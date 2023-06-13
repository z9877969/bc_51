import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import PrioritySelect from "../components/PrioritySelect/PrioritySelect";
import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import { actions } from "../redux/counter/counterSlice";
import { getTodo } from "../redux/todo/todoOpertions";
import { selectCount } from "../redux/counter/counterSelectors";
import { selectIsTodoExist } from "../redux/todo/todoSelectors";

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
