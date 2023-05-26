import { Component } from "react";
import clsx from "clsx";
import { nanoid } from "nanoid";
import s from "./TodoForm.module.scss";

class TodoForm extends Component {
  #idLow = nanoid();
  #idMedium = nanoid();
  #idHigh = nanoid();

  state = {
    date: "2023-05-25",
    title: "",
    descr: "",
    priority: "", // low | high | medium
    dayPeriods: [], // [a, i] | [a, m] | [a, m, i]
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // const newTodo = { ...this.state, isDone: false, id: nanoid() };
    // this.props.addTodo(newTodo);
    this.props.onSubmit(this.state);
  };

  render() {
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
          <span> Title </span>
          <input
            className={s.input}
            type="text"
            name="title"
            value={this.state.title}
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
              id={this.#idLow}
              className={s.input}
              type="radio"
              name="priority"
              value="low"
              checked={this.state.priority === "low"}
              onChange={this.handleChange}
            />
            <label className={clsx(s.label, s.radio)} htmlFor={this.#idLow}>
              Low
            </label>
          </div>
          <div className={s.radioWrapper}>
            <input
              id={this.#idMedium}
              className={s.input}
              type="radio"
              name="priority"
              value="medium"
              checked={this.state.priority === "medium"}
              onChange={this.handleChange}
            />
            <label className={clsx(s.label, s.radio)} htmlFor={this.#idMedium}>
              Medium
            </label>
          </div>
          <div className={s.radioWrapper}>
            <input
              id={this.#idHigh}
              className={s.input}
              type="radio"
              name="priority"
              value="high"
              checked={this.state.priority === "high"}
              onChange={this.handleChange}
            />
            <label className={clsx(s.label, s.radio)} htmlFor={this.#idHigh}>
              High
            </label>
          </div>
        </div>
        <div>
          <label>
            Morning
            <input
              type="checkbox"
              name="dayPeriods"
              value="morning"
              checked={this.state.dayPeriods.includes("morning")}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Afternoon
            <input
              type="checkbox"
              name="dayPeriods"
              value="afternoon"
              checked={this.state.dayPeriods.includes("afternoon")}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Evening
            <input
              type="checkbox"
              name="dayPeriods"
              value="evening"
              checked={this.state.dayPeriods.includes("evening")}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <button className={s.submit} type="submit">
          Ok
        </button>
      </form>
    );
  }
}

export default TodoForm;

// const options = [
//   {
//     label: "Date",
//     type: "date",
//     name: "date",
//     placeholder: null,
//   },
//   {
//     label: "Title",
//     type: "text",
//     name: "title",
//     placeholder: "Input title...",
//   },
// ];

// const Form = ({ iS, onSubmit, options }) => {
//   const hTextChange = () => {};
//   const hDateChange = () => {};
//   const hRadioChange = () => {};
//   const hFileChange = () => {};

//   return (
//     <form>
//       {options.map((el) => (
//         <label htmlFor="">
//           {el.label}
//           <input type={el.type} name={el.name} placeholder={el.placeholder} />
//         </label>
//       ))}
//     </form>
//   );
// };
