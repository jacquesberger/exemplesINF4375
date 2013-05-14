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

http.createServer(function(req, res) {
  if (req.method === "GET") {
    generateHtmlResponse(res);
  } if (req.method === "POST") {
    var chunks = [];
    req.setEncoding("utf-8");
    req.on("data", function(chunk) {
      chunks.push(chunk);
    });
    req.on("end", function(){
      var data = chunks.join();
      var parts = data.split("&");
      var lastName = parts[0].split("=")[1];
      var firstName = parts[1].split("=")[1];
      console.log("Lastname:", lastName);
      console.log("Firstname:", firstName);
      generateHtmlResponse(res);
    });
  } else {
    res.writeHead(500, {"Content-Type": "text/plain; charset=utf-8"});
    res.end("Opération non supportée.");
  }
}).listen(3000);

function generateHtmlResponse(res) {
	res.writeHead(200, {"Content-Type" : "text/html"});
	res.write("<!DOCTYPE html>");
	res.write("<html>");
	res.write("<head>");
	res.write("<meta charset='utf-8'>");
	res.write("<title>Enregister une personne</title>");
	res.write("</head>");
	res.write("<body>");
	res.write("<form method='post' action='/'>");
	res.write("<table>");
  res.write("<tr><td>");
  res.write("<label for='nom'>Nom de la personne : </label>");
  res.write("</td><td>");
  res.write("<input type='text' placeholder='Nom de la personne' name='nom'>");
  res.write("</td></tr>");
  res.write("<tr><td>");
  res.write("<label for='prenom'>Prénom de la personne : </label>");
  res.write("</td><td>");
  res.write("<input type='text' placeholder='Prénom de la personne' name='prenom'>");
  res.write("</td></tr>");
  res.write("</table>");
  res.write("<input type='submit' value='Envoyer'>");
	res.write("</form>");
	res.write("</body>");
	res.write("</html>");
	res.end();
}
