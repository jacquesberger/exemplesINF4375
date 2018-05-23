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

// On se connecte sur le serveur de MongoDB
MongoClient.connect(url, function(err, client) {
  if (err) {
    console.log(err);
  } else {
    // Obtenir une référence sur la base de données
    const db = client.db("inf4375");

    // Se positionner sur une collection en particulier. C'est sur la collection
    // que l'on peut effectuer la plupart des opérations, comme l'insertion de
    // données.
    const collection = db.collection("disco");

    var singleData = {
      artist: "Katra",
      title: "Beast Within",
      year: 2008
    };

    // Insertion d'un seul enregistrement.
    collection.insert(singleData, function (err, result) {
      if (err) {
        console.log(err);
        client.close();
      } else {
        var multipleData = [
          {
            artist: "Néodyme",
            title: "La tour",
            year: 2010
          },
          {
            artist: "Iced Earth",
            title: "The Dark Saga",
            year: 1996
          },
          {
            artist: "Bruce Dickinson",
            title: "Accident of Birth",
            year: 1997
          },
          {
            artist: "Children of Bodom",
            title: "Something Wild",
            year: 1997
          },
          {
            artist: "Dio",
            title: "Holy Diver",
            year: 1983
          },
          {
            artist: "In Flames",
            title: "Sense of Purpose",
            year: 2008
          },
          {
            artist: "King Diamond",
            title: "The Eye",
            year: 1990
          }
        ];

        // Insertion de plusieurs enregistrements en même temps.
        collection.insert(multipleData, function (err, result) {
          if (err) {
            console.log(err);
            client.close();
          } else {
            // On affiche la liste complète des albums dans la collection pour
            // montrer que les deux insertions ont bien fonctionnées.
            collection.find().toArray(function (err, albums) {
              if (err) {
                console.log(err);
                client.close();
              } else {
                for (var i = 0; i < albums.length; i++) {
                  var album = albums[i];
                  console.log("L'album", album.title, "de l'artiste", album.artist, "a été publié en", album.year + ".");
                }

                // On ferme la connexion à la base de données.
                client.close();
              }
            });
          }
        });
      }
    });
  }
});
