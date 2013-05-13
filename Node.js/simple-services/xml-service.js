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
var xmlbook = require("./xmlbook.js");

http.createServer(function(req, res) {
  xmlbook.getBookReferences(function (bookList) {  
    res.writeHead(200, {"Content-Type" : "application/xml"});
    res.write("<?xml version='1.0' encoding='utf-8'?>");
    res.write("<books>");
    for (var i = 0; i < bookList.length; i++) {
      res.write("<book>");
      res.write("<title>" + bookList[i].title + "</title>");
      res.write("<year>" + bookList[i].year + "</year>");
      res.write("</book>");
    }
    res.write("</books>");
    res.end();
  });
}).listen(3000);
