import React, { Component } from "react";

import Cart from "../Cart/Cart";
// import Counter from "../Counter/Counter";
import Header from "../Header/Header";
import Main from "../Main/Main";

class App extends Component {
  state = {
    isOpen: false,
    cartProducts: [],
  };

  openCart = () => {
    this.setState({ isOpen: true });
  };

  closeCart = () => {
    this.setState({ isOpen: false });
  };

  addToCart = (product) => {
    this.setState((prevState) => {
      const isProductExist = prevState.cartProducts.some(
        (el) => el.id === product.id
      );
      return {
        cartProducts: !isProductExist
          ? [
              ...prevState.cartProducts,
              { ...product, quantity: 1, sum: Number(product.price) },
            ]
          : prevState.cartProducts.map((el) =>
              el.id !== product.id
                ? el
                : {
                    ...el,
                    quantity: el.quantity + 1,
                    // sum: Number(el.price) + product.sum,
                    sum: Number(el.price) * (el.quantity + 1),
                  }
            ),
      };
    });
  };

  removeFromCart = (id) => {
    this.setState((prevState) => ({
      cartProducts: prevState.cartProducts.filter((el) => el.id !== id),
    }));
  };

  render() {
    return (
      <>
        <Header openCart={this.openCart} />
        <Main addToCart={this.addToCart} />
        <Cart
          isOpen={this.state.isOpen}
          closeCart={this.closeCart}
          products={this.state.cartProducts}
          removeFromCart={this.removeFromCart}
        />
        {/* <Counter /> */}
      </>
    );
  }
}

export default App;

// const foo = (n) => {
//   const value = n + 5;
//   console.log(value);
// };

// const bar = (cb) => {
//   window.addEventListener("click", (e) => cb(24));
// };

// bar(foo);

// const arr = [{}, {}, {}]

// const some = (product) => {
//   arr.includes(product)
//   // {} === {} | ref1 === ref2 -> false
// }

// some({})