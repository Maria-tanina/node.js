import { EventEmitter } from "events";
import fs from "fs";

const fileEmitter = new EventEmitter();

fileEmitter.on("writeComplete", () => {
  console.log("Write complete");
  fs.appendFile("./file.txt", "\nSecond line", () => {
    fileEmitter.emit("appendComplete");
  });
});

fileEmitter.on("appendComplete", () => {
  console.log("Appended text");
  fs.rename("./file.txt", "./renamed-file", () => {
    fileEmitter.emit("renameComplete");
  });
});

fileEmitter.on("renameComplete", () => {
  console.log("Renamed");
});

fs.writeFile("./file.txt", "First line", (error) => {
  if (error) {
    console.log("Error");
  } else {
    fileEmitter.emit("writeComplete");
  }
});
