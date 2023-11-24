import {EventEmitter} from "events";

class Post extends EventEmitter {
    constructor(author, text) {
        super();
        this.author = author;
        this.text = text;
        this.likesQty = 0;
    }

    like(name) {
        this.likesQty+=1;
        this.emit("likePost", name);
    }
}


const myPost = new Post("Maria", "Hello world");

myPost.on("likePost", (name) => {
    console.log(`${name} liked your post`);
});

myPost.like("Ivan");
myPost.like("Anna");