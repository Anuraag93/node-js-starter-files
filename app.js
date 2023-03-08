const http = require("http");

function rqListener(req, res) {
  console.log(req.url, req.method, req.headers);
  //   process.exit();
  res.setHeader("Content-Type", "text/html");
}

http.createServer(rqListener).listen(8080);
