import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../../redux/counter/counterSlice";
import { addTodo } from "../../redux/todo/todoOpertions";
import clsx from "clsx";
import s from "./TodoForm.module.scss";
import { selectCount } from "../../redux/counter/counterSelectors";

const initialState = {
  date: "2023-06-01",
  descr: "",
  priority: "",
};

const TodoForm = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
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
    dispatch(addTodo({ ...form, isDone: false }));
    setForm(initialState);
  };

  return (
    <>
      {count && <h1>Counter Modal - {`${count}`}</h1>}
      <button onClick={() => dispatch(actions.increment(20))}>
        Increment counter
      </button>

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
    </>
  );
};

export default memo(TodoForm);
