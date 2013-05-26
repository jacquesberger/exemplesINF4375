/*
 * Copyright 2013 Jacques Berger.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var http = require("http");
var querystring = require("querystring");

main = function() {
  postData = querystring.stringify({login: "***", password: "***"});

  options = {
    host: "notes.jberger.org",
    path: "/",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": postData.length
    }
  };

  var request = http.request(options, function(res) {
    var chunks = [];
    res.setEncoding("utf8");

    res.on("data", function(chunk) {
      chunks.push(chunk.toString());
    });

    res.on("end", function() {
      htmlSource = chunks.join();
      console.log(htmlSource);
    });
  });

  request.write(postData);
  request.end();
}

main();
