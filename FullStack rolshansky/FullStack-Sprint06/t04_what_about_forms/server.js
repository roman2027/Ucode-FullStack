const http = require("http");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = "3000";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type","text/html");
  let readStream = fs.createReadStream(__dirname + "/index.html");
  readStream.pipe(res);
});

server.listen(port, hostname, () => {
  console.log(`server started at http://${hostname}:${port}`);
});