import { Component } from "react";
import s from "./Counter.module.css";

class Counter extends Component {
  // prevState
  state = {
    a: 21,
    b: true,
    count: 50, // -20 | +15 | 0
  };

  handleDecrement = () => {
    // this.state.a = 54
    // this.setState({ count: 60, b: false, a: 48 }); // ref1 -> ref2
    this.setState((prevState) => ({ count: prevState.count - 20 }));
    // this.setState((prevState) => ({ count: prevState.count - 20 })); // count = 50 - 20 -> 30
    // this.setState((prevState) => ({ count: prevState.count - 20 })); // count = 30 - 20 -> 10
    // this.setState((prevState) => ({ count: prevState.count - 20 })); // count = 10 - 20 -> -10
  };

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 15 }));
  };

  handleReset = () => {
    this.setState({ count: 50 });
  };

  render() {
    return (
      <div className={s.container}>
        <h1 className={s.title}>Counter</h1>
        <p className={s.count}>{this.state.count}</p>
        <div className={s.btnsWrapper}>
          <button
            onClick={this.handleDecrement}
            className={s.btn}
            type="button"
          >
            -
          </button>
          {/* <img src="./someurl" onLoad={() => {}} onError={() => {}} alt="" /> */}
          <button onClick={this.handleReset} className={s.btn} type="button">
            0
          </button>
          <button
            onClick={this.handleIncrement}
            className={s.btn}
            type="button"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

const CounterFn = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <p className={s.count}>0</p>
      <div className={s.btnsWrapper}>
        <button
          onClick={(e) => {
            console.log("button decrement :>> ", e);
          }}
          className={s.btn}
          type="button"
        >
          -
        </button>
        {/* <img src="./someurl" onLoad={() => {}} onError={() => {}} alt="" /> */}
        <button
          onClick={(e) => {
            console.log("button reset :>> ", e);
          }}
          className={s.btn}
          type="button"
        >
          0
        </button>
        <button
          onClick={(e) => {
            console.log("button increment :>> ", e);
          }}
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
