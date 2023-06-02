import s from "./Counter.module.scss";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <p className={s.count}>{count}</p>
      <div className={s.btnsWrapper}>
        <button
          onClick={() => setCount((prevCount) => prevCount - 20)}
          className={s.btn}
          type="button"
        >
          -
        </button>
        <button onClick={() => setCount(0)} className={s.btn} type="button">
          0
        </button>
        <button
          onClick={() => setCount((prevCount) => prevCount + 35)}
          className={s.btn}
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
