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
var jberger = require("./jberger.js");

http.createServer(function (req, res) {
  
  jberger.extractNumberOfPosts(function (err, postNumber) {
    if (err) {
      res.writeHead(500, {"Content-Type": "text/plain"});
      res.write("Server error: " + err);
      res.end();
    } else {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write("<!DOCTYPE html><html><head><meta charset='utf-8'>" +
                "<title>Number of posts</title></head><body><p>" +
                "There is " + postNumber + " blog posts on jberger.org." +
                "</p></body></html>");
      res.end();
    }
  });
  
}).listen(3000);
