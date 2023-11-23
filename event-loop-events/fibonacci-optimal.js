function fib(n) {
    if (n === 1 || n === 0) {
        return n;
    }

    let prev = 0;
    let next = 1;
    let sum;
    for(let i = 2; i <=n; i++) {
        sum = prev + next
        prev = next;
        next = sum;
    }

    return sum;
}

console.log(fib(10))