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

    // Supprimons The Eye de King Diamond. Le deuxième paramètre au callback
    // indique le nombre d'objets qui ont été supprimés.
    collection.deleteOne({artist: "King Diamond", title: "The Eye"}, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        if (result.deletedCount > 0) {
          let plural = (result.deletedCount > 1) ? "s" : "";
          console.log("Album" + plural + " supprimé" + plural);
        } else {
          console.log("Aucun album n'a été trouvé.");
        }
      }
      client.close();
    });
  }
});
