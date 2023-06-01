import clsx from "clsx";
import s from "./TodoForm.module.scss";
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  // 1st variant form
  // const [date, setDate] = useState("2023-06-01");
  // const [descr, setDescr] = useState("");
  // const [priority, setPriority] = useState("");

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   switch (name) {
  //     case "date":
  //       setDate(value);
  //       break;
  //     case "descr":
  //       setDescr(value);
  //       break;
  //     case "priority":
  //       setPriority(value);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // 2nd variant form
  const [form, setForm] = useState({
    date: "2023-06-01",
    descr: "",
    priority: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(form);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span> Date </span>
        <input
          className={s.input}
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        <span> Description </span>
        <input
          className={s.input}
          type="text"
          name="descr"
          value={form.descr}
          onChange={handleChange}
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
            checked={form.priority === "low"}
            onChange={handleChange}
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
            checked={form.priority === "medium"}
            onChange={handleChange}
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
            checked={form.priority === "high"}
            onChange={handleChange}
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
};

export default TodoForm;
