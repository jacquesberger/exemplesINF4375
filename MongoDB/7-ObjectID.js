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

const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, client) {
  if (err) {
    console.log(err);
  } else {
    const db = client.db("inf4375");
    const collection = db.collection("disco");

    let album = {
      artist: "Michael Jackson",
      title: "Bad",
      year: 1987
    };

    collection.insert(album, function (err, result) {
      if (err) {
        console.log(err);
        client.close();
      } else {

        // La variable result.ops contient un Array avec tous les objets ayant été créé
        // lors de l'insertion. On place l'id de l'album dans une variable et on
        // fait un toString sur l'id pour l'avoir sous forme de chaîne de
        // caractères. On le veut sous forme de string car c'est le format qu'on a
        // lorsque l'id provient d'une URL d'un service REST.
        let albumId = result.ops[0]._id.toString();
       
        // Maintenant que nous avons l'id sous forme de string, on veut supprimer
        // l'album en utilisant l'id. Le type dans MongoDB pour l'id est ObjectId.
        // Il faut donc, dans la requête, utiliser également le type ObjectID
        // (attention à la différence de casse).
        collection.deleteOne({_id: new mongo.ObjectID(albumId)}, function (err, result) {
          if (err) {
            console.log(err);
          } else {
            if (result.deletedCount === 1) {
              console.log("Album supprimé");
            }
          }
          client.close();
        });
      }
    });
  }
});
