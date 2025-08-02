const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    // console.log(req.headers);
    if (req.url === "/favicon.ico") return res.end();

    const log = `${Date.now()}: ${req.url} New Request Received\n`;
    const myurl = url.parse(req.url, true); //parsing the url after the ? likeabout?name=raj

    console.log(myurl);

    fs.appendFile("log.txt", log, (err, data) => {

        switch (myurl.pathname) {
            case "/":
            case "/home":
                res.end("Home Page");
                break;

            case "/about":
                // const qp = res.end("hi my name is raj");

                // res.end("I am Raj");

                const username = myurl.query.name
                res.end(`Hi, ${username}`);
                break;

            case '/search':
                const search = myurl.query.search_query;
                res.end("Here is the search result " + search);
                break;

            default:
                res.end("404 error !");
                break;
        }

    });

    // res.end("hello whats up from 8002");

});

// myServer.listen(8002, () => console.log("Server started"));
myServer.listen(8002, 'localhost', () => {
    console.log(`Server running at http://localhost:8002/`);
});
