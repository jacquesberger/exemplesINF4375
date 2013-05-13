/*
 * Copyright 2012 Jacques Berger.
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
