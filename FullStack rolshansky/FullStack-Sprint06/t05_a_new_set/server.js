const hostname = "127.0.0.1";
const port = "3000";
const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream("./index.html", "UTF-8").pipe(res);
  } else if (req.method === "POST") {
    let body = "";
    req.on("data", function (chunk) {
      body += chunk;
    });
    req.on("end", function () {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(body);
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`server started at http://${hostname}:${port}`);
});
