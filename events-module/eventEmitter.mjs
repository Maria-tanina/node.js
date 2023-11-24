import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

const timeoutFn = () => {
  console.log("Timeout!");
};

myEmitter.on("timeout", timeoutFn);

setTimeout(() => {
  myEmitter.emit("timeout");
}, 1000);

setTimeout(() => {
  myEmitter.off("timeout", timeoutFn);
}, 3000);
