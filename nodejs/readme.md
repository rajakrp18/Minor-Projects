# Node.js Mini Projects

This directory contains beginner-level Node.js practice modules that cover:

- File system operations
- HTTP server creation
- Function/module importing and exporting

---

## 📁 Folder Structure

nodejs/
├── files/
│ └── index.js
├── http_server/
│ └── index.js
├── import_functions/
│ ├── index.js
│ └── math.js

lua
Copy
Edit

---

## 🔹 1. `files/` – File System & OS Module

Demonstrates:

- Writing to a file
- Reading a file asynchronously
- Fetching system CPU core count

**Code Example:**

```js
const fs = require("fs");
const os = require("os");

console.log(os.cpus().length); // Number of CPU cores

fs.writeFileSync("./text.txt", "hello there");

fs.readFile("./contact.txt", "utf-8", (err, result) => {
    console.log(result);
});

console.log(1);
console.log(2);
console.log(3);
console.log(4);
🔹 2. http_server/ – Basic HTTP Routing with Query Parsing
Creates a basic HTTP server using Node.js core modules (http, url, and fs).

Code Overview:

js
Copy
Edit
const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end();

    const log = `${Date.now()}: ${req.url} New Request Received\n`;
    const myurl = url.parse(req.url, true); // Parses query strings

    fs.appendFile("log.txt", log, (err, data) => {
        switch (myurl.pathname) {
            case "/":
            case "/home":
                res.end("Home Page");
                break;

            case "/about":
                const username = myurl.query.name;
                res.end(`Hi, ${username}`);
                break;

            case "/search":
                const search = myurl.query.search_query;
                res.end("Here is the search result " + search);
                break;

            default:
                res.end("404 error !");
                break;
        }
    });
});

myServer.listen(8002, 'localhost', () => {
    console.log(`Server running at http://localhost:8002/`);
});
🧪 Example URLs
Home: http://localhost:8002/

About: http://localhost:8002/about?name=Raj

Search: http://localhost:8002/search?search_query=books

🔹 3. import_functions/ – Using CommonJS Modules
This folder demonstrates how to import and export functions across files in Node.js.

math.js
js
Copy
Edit
function add(a, b) {
    return a + b;
}

function subs(a, b) {
    return a - b;
}

module.exports = {
    add, subs
};
index.js
js
Copy
Edit
const math = require("./math");

console.log(math.add(2, 4));   // Output: 6
console.log(math.subs(4, 2));  // Output: 2
📦 No External Dependencies
This project uses only built-in Node.js modules, so no need to run npm install.

📌 Notes
Make sure to create contact.txt in the files/ folder before running file read operations.

All logs in the HTTP server get written to log.txt.

✍️ Author
Raj Poddar
GitHub: @rajakrp18

