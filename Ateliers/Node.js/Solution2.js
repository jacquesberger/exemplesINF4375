/*
 * Copyright 2016 Jacques Berger.
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
var mongo = require("mongodb");

function generateHtml(list) {
  var html = "<!DOCTYPE html><html><head><meta charset='utf-8'><title>Liste de cours</title></head><body><h1>Cours</h1><table><thead><tr><th>Sigle</th><th>Titre</th></tr></thead><tbody>";

  for (var i = 0; i < list.length; i++) {
    html += "<tr><td>" + list[i].identifier + "</td><td>" + list[i].title + "</td></tr>";
  }

  html += "</tbody></table></body></html>";
  return html;
}

function launchServer(collection) {
  http.createServer(function (req, res) {
    collection.find().toArray(function(err, list) {
      if (err) {
        console.log("Erreur de lecture de la base de données.", err);
      } else {
        var html = generateHtml(list);
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(html);
        res.end();
      }
    });
  }).listen(3000);
}

var server = new mongo.Server("localhost", 27017);
var db = new mongo.Db("atelier", server, {safe:true});
db.open(function (err, db) {
  if (err) {
    console.log("Impossible d'ouvrir une connexion sur la base de données.", err);
  } else {
    db.collection("laboNode", function (err, collection) {
      if (err) {
        console.log("Erreur avec la base de données.", err);
        db.close();
      } else {
        launchServer(collection);
      }
    });
  }
});
