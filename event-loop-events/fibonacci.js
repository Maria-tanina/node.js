async function fib(n) {
  return new Promise((resolve, reject) => {
    if (n === 0 || n === 1) {
      return resolve(n);
    }
    setImmediate(() =>
      Promise.all([fib(n - 1), fib(n - 2)]).then(([fib1, fib2]) => {
        return resolve(fib1 + fib2);
      })
    );
  });
}

console.log(fib(20).then((res) => console.log(res)));
