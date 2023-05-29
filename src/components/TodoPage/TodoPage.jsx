import { Component } from "react";
import PrioritySelect from "../PrioritySelect/PrioritySelect";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { nanoid } from "nanoid";
import { todo as todoList } from "../../data/todo";

const createTodoList = () =>
  Array(15)
    .fill(null)
    .map(() => ({
      date: "2023-05-25",
      descr: "Hello!",
      priority: "",
      isDone: false,
      id: nanoid(),
    }));

class TodoPage extends Component {
  state = {
    todo: [],
    filter: "all",
  };

  static getDerivedStateFromProps(props, state) {
    console.log("TodoPage getDerivedStateFromProps");
    // console.log("props :>> ", props);
    // console.log("state :>> ", state);
    return null;
  }

  componentDidMount() {
    this.setState({
      todo: JSON.parse(localStorage.getItem("todo")) 
      // || [],
    });
  }

  getSnapshotBeforeUpdate() {
    return document.body.clientHeight;
  }
  // UPDATE DOM

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log("TodoPage CDU");
    // console.log("prevProps :>> ", prevProps);
    // console.log("this.props :>> ", this.props);
    // console.log("prevState :>> ", prevState);
    // console.log("this.state :>> ", this.state);
    console.log("snapshot", snapshot);
    // if (this.state.filter !== prevState.filter) {
    //   alert(`Todo filtered by priority-${this.state.filter}`);
    // }
    // scroll
    // if (prevState.todo !== this.state.todo) {
    //   window.scrollTo({
    //     top: snapshot,
    //     behavior: "smooth",
    //   });
    // }
    if (prevState.todo !== this.state.todo) {
      localStorage.setItem("todo", JSON.stringify(this.state.todo));
    }
  }

  addTodo = (todo) => {
    this.setState((prevState) => ({ todo: [...prevState.todo, todo] }));
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

  handleAddMoreTodo = () => {
    const newTodoList = createTodoList();
    this.setState((prevState) => ({
      todo: [...prevState.todo, ...newTodoList],
    }));
  };

  render() {
    console.log("TodoPage Render");
    const filteredTodo = this.filterTodo();

    return (
      <>
        <ToDoForm addTodo={this.addTodo} />
        <PrioritySelect
          filter={this.state.filter}
          changeFilter={this.changeFilter}
        />
        <ToDoList
          todo={filteredTodo}
          removeTodo={this.removeTodo}
          updateTodoStatus={this.updateTodoStatus}
        />
        <button onClick={this.handleAddMoreTodo}>More</button>
      </>
    );
  }
}

export default TodoPage;
