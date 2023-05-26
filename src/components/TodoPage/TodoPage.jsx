import { Component, createElement } from "react";

import PrioritySelect from "../PrioritySelect/PrioritySelect";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { todo as todoList } from "../../data/todo";

class TodoPage extends Component {
  state = {
    todo: todoList,
    filter: "all",
  };

  addTodo = (todo) => {
    const newTodo = { ...todo, isDone: false, id: Date.now() };
    this.setState((prevState) => ({ todo: [...prevState.todo, newTodo] }));
  };

  removeTodo = (id) => {
    this.setState((prevState) => ({
      todo: prevState.todo.filter((el) => el.id !== id),
    }));
  };

  updateTodoStatus = (id) => {
    this.setState((prevState) => ({
      todo: prevState.todo.map((el) =>
        el.id !== id ? el : { ...el, isDone: !el.isDone }
      ),
    }));
  };

  changeFilter = (e) => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  filterTodo = () => {
    const { todo, filter } = this.state;
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  };

  render() {
    // createFunction

    const filteredTodo = this.filterTodo();

    return (
      <>
        <ToDoForm onSubmit={this.addTodo} />
        {/* <ToDoForm onSubmit={window.alert} />
        <ToDoForm onSubmit={console.log} /> */}
        <PrioritySelect
          filter={this.state.filter}
          changeFilter={this.changeFilter}
        />
        <ToDoList
          todo={filteredTodo}
          removeTodo={this.removeTodo}
          updateTodoStatus={this.updateTodoStatus}
        />
      </>
    );
  }
}

export default TodoPage;

// const baz = ({ string }) => {
//   return createElement("h2", null, string);
// };

// const bar = ({ arr }) => {
//   const string = arr.join(" ");
//   return baz({ string });
// };

// const foo = () => {
//   const arr = [];
//   return bar({ arr });
// };

// const App = () => {
//   return foo();
// };

// App(); // <h2>QWE</h2>
