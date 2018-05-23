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

    // C'est le même exemple que le précédent mais avec une utilisation
    // différente du curseur.
    let cursor = collection.find({year: 1997}, {projection: {artist:true, title:true, _id:false}});
    console.log("Albums publiés en 1997 :");

    // Le callback est appelé pour chaque objet retourné par le serveur. La
    // difficulté ici est d'appeler la méthode close uniquement après que tous
    // les objets aient été traité, sinon la liste d'objet serait incomplète. Le
    // dernier callback qui sera lancé recevra null dans le deuxième paramètre,
    // on peut donc fermer la connexion à ce moment.
    cursor.each(function (err, album) {
      if (err) {
        console.log(err);
      }

      if (album) {
        console.log("L'album", album.title, "de l'artiste", album.artist + ".");
      } else {
        client.close();
      }
    });
  }
});
