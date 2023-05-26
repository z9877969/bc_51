// const foo = () => {
//   const promise = fetch("http://localhost:4040/todo");
//   promise
//     .then((promiseResult) => {
//       console.log(promiseResult);
//       if (promiseResult === invalid) {
//         throw new Error("Promise result invalid");
//       }
//     })
//     .catch((err) => console.log(err.message));
// };

const promise1 = new Promise((resolve, reject) => {
  resolve([1, 2, 3]);
  //   reject("Error message");
});

const promise = new Promise((resolve, reject) => {
  //   resolve("qwe");
  reject({ error: "Error message", status: 404 });
});

promise1.then((numbers) => {
  console.log("numbers :>> ", numbers);
}); // {}
promise
  .then((result) => {
    console.log("result :>> ", result);
  })
  .catch((err) => {
    console.log("err :>> ", err);
});
