var fs = require("fs");
var http = require("http");

function generateHtmlDocument(title, data) {
  return "<!DOCTYPE html><html><head><meta charset='utf-8'><title>" +
         title + "</title></head><body><p>" + data + "</p></body></html>";
}

http.createServer(function (req, res) {

  fs.readFile("textfile", function(err, data) {
    if (err) {
      res.writeHead(404, {"Content-Type": "text/html"});
      res.write(generateHtmlDocument("File not found!", 
                             "The requested file was not found on the server."));
      res.end();
    } else {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(generateHtmlDocument("File content", data));
      res.end();
    }
  });

}).listen(3000);