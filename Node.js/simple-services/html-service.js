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
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write("<!DOCTYPE html><html><head><meta charset='utf-8'><title>Liste de documents</title></head>");
    res.write("<body>");
    if (!bookList.length) {
      res.write("<p>Aucun livre dans le catalogue.</p>");
    } else {
      res.write("<h1>Liste des livres</h1><ul>");
      for (var i = 0; i < bookList.length; i++) {
        res.write("<li>" + bookList[i].title + " (" + bookList[i].year + ")</li>");
      }
      res.write("</ul>");
    }
    res.write("</body></html>");
    res.end();
  });
}).listen(3000);
