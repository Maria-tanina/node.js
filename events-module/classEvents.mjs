import { EventEmitter } from "events";

class Post extends EventEmitter {
  constructor(author, text) {
    super();
    this.author = author;
    this.text = text;
    this.likesQty = 0;
    this.on("likePost", (name) => {
      console.log(`${name} liked your post`);
    });
    this.on("error", (error) => {
      console.log(error);
    });
  }

  like(name) {
    if (!name) {
      this.emit("error", new Error("Something wrong"));
    } else {
      this.likesQty += 1;
      this.emit("likePost", name);
    }
  }
}

const myPost = new Post("Maria", "Hello world");

myPost.like("Ivan");
myPost.like("Anna");
myPost.like();
