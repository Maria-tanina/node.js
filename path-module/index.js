const path = require("path");

const filePath = "C:\\Users\\Maria\\Desktop\\node\\path-module\\index.js";

const textFilePath = "C:\\Users\\Maria\\Desktop\\index.js";

const relativePath = "./node/movie.mov";

const directoryPath = "./node/subfolder";

console.log(path.isAbsolute(relativePath)); //false

console.log(path.basename(filePath)); //index.js

console.log(path.basename(directoryPath)); //subfolder

console.log(path.dirname(filePath)); //C:\Users\Maria\Desktop\node\path-module

console.log(path.dirname(directoryPath)); //./node

console.log(path.resolve(relativePath)); //C:\Users\Maria\Desktop\node\path-module\node\movie.mov

console.log(path.extname(textFilePath)); //.js

console.log(path.parse(filePath));
// {
//   root: 'C:\\',
//     dir: 'C:\\Users\\Maria\\Desktop\\node\\path-module',
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
// }
