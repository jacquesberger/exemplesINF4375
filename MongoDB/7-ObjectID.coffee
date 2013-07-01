# Copyright 2013 Jacques Berger.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

mongo =  require "mongodb"

# Note : Cet exemple ne contient aucune gestion d'erreur.

server = new mongo.Server "localhost", 27017
db = new mongo.Db "inf4375", server, {safe:true}

db.open (err, db) ->
  db.collection "disco", (err, collection) ->

    album =
      artist: "Michael Jackson"
      title: "Bad"
      year: 1987

    collection.insert album, (err, result) ->

      # La variable result contient un Array avec tous les objets ayant été créé
      # lors de l'insertion. On place l'id de l'album dans une variable et on
      # fait un toString sur l'id pour l'avoir sous forme de chaîne de
      # caractères. On le veut sous forme de string car c'est le format qu'on a
      # lorsque l'id provient d'une URL d'un service REST.
      albumId = result[0]._id.toString()
     
      # Maintenant que nous avons l'id sous forme de string, on veut supprimer
      # l'album en utilisant l'id. Le type dans MongoDB pour l'id est ObjectId.
      # Il faut donc, dans la requête, utiliser également le type ObjectID
      # (attention à la différence de casse).
      collection.remove {_id: new mongo.BSONPure.ObjectID albumId}, (err, number) ->
        console.log "Album supprimé"
        db.close()
