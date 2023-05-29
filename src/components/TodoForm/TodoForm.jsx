import { Component, PureComponent } from "react";

import clsx from "clsx";
import { nanoid } from "nanoid";
import s from "./TodoForm.module.scss";

// class Test {
//   constructor() {
//     console.log("object");
//   }
// }

// const test = new Test();

class TodoForm extends PureComponent {
  state = {
    date: "2023-05-25",
    descr: "Hello!",
    priority: "",
  };

  // static getDerivedStateFromProps(props, state) {
  //   console.log("TodoForm_getDerivedStateFromProps");
  //   // console.log("state :>> ", state);
  //   // console.log("props :>> ", props);
  //   const newState = state.descr ? { date: "2023-06-01" } : null;
  //   return newState;
  // }

  componentDidMount() {
    // fetch -> setState({data})
    // addEventListner
    // setInterval -> setState({count})
    console.log("TodoForm CDM");
  }

  // shouldComponentUpdate(newProps, newState) {
  //   console.log("TodoForm shouldComponentUpdate");
  //   // console.log("newProps :>> ", newProps);
  //   // console.log("newState :>> ", newState);
  //   // return true;
  //   if (
  //     newProps.addTodo === this.props.addTodo &&
  //     newState.date === this.state.date &&
  //     newState.descr === this.state.descr &&
  //     newState.priority === this.state.priority
  //   )
  //     return false; // render close

  //   return true; // return open
  // }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { ...this.state, isDone: false, id: nanoid() };
    this.props.addTodo(newTodo);
  };

  render() {
    console.log("Render TodoForm");

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          <span> Date </span>
          <input
            className={s.input}
            name="date"
            type="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.label}>
          <span> Description </span>
          <input
            className={s.input}
            type="text"
            name="descr"
            value={this.state.descr}
            onChange={this.handleChange}
          />
        </label>

        <div className={s.labelWrapper}>
          <div className={s.radioWrapper}>
            <input
              id="formRadioLow"
              className={s.input}
              type="radio"
              name="priority"
              value="low"
              checked={this.state.priority === "low"}
              onChange={this.handleChange}
            />
            <label className={clsx(s.label, s.radio)} htmlFor="formRadioLow">
              Low
            </label>
          </div>
          <div className={s.radioWrapper}>
            <input
              id="formRadioMedium"
              className={s.input}
              type="radio"
              name="priority"
              value="medium"
              checked={this.state.priority === "medium"}
              onChange={this.handleChange}
            />
            <label className={clsx(s.label, s.radio)} htmlFor="formRadioMedium">
              Medium
            </label>
          </div>
          <div className={s.radioWrapper}>
            <input
              id="formRadioHigh"
              className={s.input}
              type="radio"
              name="priority"
              value="high"
              checked={this.state.priority === "high"}
              onChange={this.handleChange}
            />
            <label className={clsx(s.label, s.radio)} htmlFor="formRadioHigh">
              High
            </label>
          </div>
        </div>
        <button className={s.submit} type="submit">
          Ok
        </button>
      </form>
    );
  }
}

export default TodoForm;
