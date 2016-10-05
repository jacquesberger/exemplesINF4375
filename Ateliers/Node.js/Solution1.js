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

var fs = require("fs");
var mongo = require("mongodb");

function parseData(data) {
  var result = [];
  var elements = data.split("\n");
  for (var i = 0; i < elements.length - 1; i++) {
    var line = elements[i];
    var identifier = line.substr(0, 7);
    var title = line.substr(8);
    result.push({identifier: identifier, title:title});
  }
  return result;
}

function sendToDatabase(list) {
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
          collection.insert(list, function (err, result) {
            if (err) {
              console.log("Erreur lors de l'insertion.", err);
            }
            db.close();
          });
        }
      });
    }
  });
}

fs.readFile("fichiertexte.txt", 'utf8', function(err, data) {
  if (err) {
    console.log("Erreur avec le fichier d'entrée", err);
  } else {
    var classes = parseData(data);
    sendToDatabase(classes);
  }
});
