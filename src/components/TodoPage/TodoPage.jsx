import { Component, useEffect, useState } from "react";

import PrioritySelect from "../PrioritySelect/PrioritySelect";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";

const TodoPage = () => {
  const [todo, setTodo] = useState(
    () => JSON.parse(localStorage.getItem("todo")) || []
  );
  const [filter, setFilter] = useState("all");

  const addTodo = (todo) => {
    const newTodo = { ...todo, isDone: false, id: Date.now() };
    setTodo((prevTodo) => [...prevTodo, newTodo]);
  };

  const removeTodo = (id) => {
    setTodo((prevTodo) => prevTodo.filter((el) => el.id !== id));
  };

  const updateTodoStatus = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((el) => (el.id !== id ? el : { ...el, isDone: !el.isDone }))
    );
  };

  const changePriority = (e) => {
    setFilter(e.target.value);
  };

  const filterTodo = () => {
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  };

  const filteredTodo = filterTodo();

  // useEffect(() => {
  //   console.log("useEffect");
  // });

  // useEffect(() => {
  //   console.log("useEffect []");
  // }, []);

  // useEffect(() => {
  //   console.log("useEffect [filter]");
  // }, [filter, todo]);

  // useEffect(() => {
  //   const savedTodo = JSON.parse(localStorage.getItem("todo")) || [];
  //   setTodo(savedTodo);
  // }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

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

// const bar = () => {};

// // foo(bar())

// count = 1;

// const useS = (iV) => {
//   let data;
//   if (count === 1) {
//     data = typeof iV === "function" ? iV() : iV;
//   }

//   const setData = (value) => {
//     data = value;
//   };

//   return [data, setData];
// };

// const [d, sD] = useS(bar());

// setData(bar())
