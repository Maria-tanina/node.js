import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

myEmitter.on("myEvent", () => {
  console.log("First listener");
});

myEmitter.on("myEvent", () => {
  console.log("Second listener");
});

setTimeout(() => {
  myEmitter.emit("myEvent");
}, 2000);
