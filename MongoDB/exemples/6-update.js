// Copyright 2013 Jacques Berger.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var mongo = require("mongodb");

// Note : Cet exemple ne contient aucune gestion d'erreur.

var server = new mongo.Server("localhost", 27017);
var db = new mongo.Db("inf4375", server, {safe:true});

db.open(function (err, db) {
  db.collection("disco", function (err, collection) {

    var album = {
      artist: "Michael Bublé",
      title: "Call Me Irresponsible",
      year: 2008 // Erreur volontaire dans l'année
    };

    collection.insert(album, function (err, result) {

      // L'année de l'album est erronée, on doit la changer pour 2007.
      collection.update({artist: "Michael Bublé", title: "Call Me Irresponsible"}, {$set: {year: 2007}}, function (err, result) {
        console.log("Mise à jour appliquée");
        db.close();
      });
    });
  });
});
