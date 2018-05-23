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

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, client) {
  if (err) {
    console.log(err);
  } else {
    const db = client.db("inf4375");
    const collection = db.collection("disco");

    let album = {
      artist: "Michael Bublé",
      title: "Call Me Irresponsible",
      year: 2008 // Erreur volontaire dans l'année
    };

    collection.insert(album, function (err, result) {
      if (err) {
        console.log(err);
        client.close();
      } else {
        // L'année de l'album est erronée, on doit la changer pour 2007.
        collection.update({artist: "Michael Bublé", title: "Call Me Irresponsible"}, {$set: {year: 2007}}, function (err, result) {
          if (err) {
            console.log(err);
          } else {
            console.log("Mise à jour appliquée");
          }
          client.close();
        });
      }
    });
  }
});
