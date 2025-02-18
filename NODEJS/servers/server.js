const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000; //use a free port

//how to create a server
//createServer() needs 2 params, which are 2 calbback functions
const server = http.createServer((req, res) => {
  //libuv comes in to play here
  //__dirname will give you access to current directory

  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );
  //console.log(filePath);
  
  const extName = String(path.extname(filePath).toLowerCase());

  //you have to explicitly say which file types to support
  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "text/png",
  };

  //then you have to define an object content type

  const contentType = mimeTypes[extName] || "application/octet-stream"; //octet-stream is a generic binary file

  //now fs will read the files to serve it
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404, { "Content-Type": "text" });
        res.end("404: guuurrrl");
      }
    } else {
      //req is from the client, so we just do res here
      //writeHead for header response
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
