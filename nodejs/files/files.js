//importing files modules 
const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);


console.log(1);
console.log(2);

// creating a file and inserting some text
fs.writeFileSync("./text.txt", "hello there")

// reading a file 
fs.readFile("./contact.txt", "utf-8", (err, result) => {
    console.log(result);

});

// console.log(result);

console.log(3);
console.log(4);

