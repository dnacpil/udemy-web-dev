const http = require("http");
const hostname = "127.0.0.1"; //localhost
const port = 3000;

//How to create a server:
//Below is the response
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hey guurl");
  }
  else if(req.url === '/dude'){
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Duuuuuude");
  }
  else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 Not Found");
  }
});
//Below is where it's listening
server.listen(port, hostname, () => {
  console.log(`Server is listening at http://${hostname}:${port}`);
});
