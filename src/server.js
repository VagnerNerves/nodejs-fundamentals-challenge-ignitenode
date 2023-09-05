import http from "node:http";

const server = http.createServer((req, res) => {
  return res.end("Inicial Challenge NodeJs");
});

server.listen(3333);
