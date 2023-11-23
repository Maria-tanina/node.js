const fs = require("fs");

const dns = require("dns");

console.log("start");

setTimeout(() => console.log("Timeout1"), 0);

fs.writeFile("./test.txt", "Hello, Node.js", () => console.log("File written"));

Promise.resolve().then(() => console.log("Promise1"));

process.nextTick(() => console.log("nextTick"));

setTimeout(() => {
    console.log("Timeout2");
    process.nextTick(() => console.log("Tick inside Timeout"));
}, 10);

dns.lookup("tfsport.azurewebsites.net", (error, address) => console.log(address));

console.log("end");










//example of blocking event loop

// let isRunning = true;
//
// setTimeout(() => isRunning = false);
//
// while(isRunning) {
//     console.log("Loop is running...");
// }


//example of non-blocking event loop

let isRunning = true;

setTimeout(() => isRunning = false, 10);

function setImmediatePromise() {
    return new Promise((resolve, reject) => {
        setImmediate(() => resolve());
    })
}

async function runLoop() {
    while(isRunning) {
        console.log("Loop is running...");
        await setImmediatePromise();
    }
}

runLoop();