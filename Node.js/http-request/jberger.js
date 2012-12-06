var http = require("http");

function extractNumberOfPosts(callback) {
  var options = {
    host: "www.jberger.org",
    method: "GET"
  };

  var request = http.request(options, function (result) {
    if (result.statusCode !== 200) {
      callback("HTTP Error: " + result.statusCode);
    } else {
      var chunks = [];
      result.setEncoding("utf-8");
      
      result.on("data", function (chunk) {
        chunks.push(chunk);
      });

      result.on("end", function () {
        var completeHtmlData = chunks.join("");
        var list = completeHtmlData.match(/<div class="post">/g);
        callback(null, list.length);
      });
    }
  });
  
  request.on("error", function (e) {
    callback(e);
  });
  
  request.end();
}

exports.extractNumberOfPosts = extractNumberOfPosts;