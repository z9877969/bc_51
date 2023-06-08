import {
  counterDecrementAction,
  counterIncrementAction,
  counterResetAction,
} from "../../redux/counter/counterActions";
import { useDispatch, useSelector } from "react-redux";

import s from "./Counter.module.scss";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <p className={s.count}>{count}</p>
      <div className={s.btnsWrapper}>
        <button
          onClick={() => dispatch(counterDecrementAction(35))}
          className={s.btn}
          type="button"
        >
          -
        </button>
        <button
          onClick={() => dispatch(counterResetAction())}
          className={s.btn}
          type="button"
        >
          0
        </button>
        <button
          onClick={() => dispatch(counterIncrementAction(40))}
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
