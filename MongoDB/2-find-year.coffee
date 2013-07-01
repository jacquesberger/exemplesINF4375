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

# Note 2 : Ce qui a déjà été expliqué dans un exemple précédent ne sera plus
# expliqué.

server = new mongo.Server "localhost", 27017
db = new mongo.Db "inf4375", server, {safe:true}

db.open (err, db) ->
  db.collection "disco", (err, collection) ->

    # La méthode find retourne un curseur sur un ensemble de données. Le premier
    # paramètre de find contient les critères de la recherche. Le deuxième
    # paramètre contient la liste des propriétés que l'on veut recevoir du
    # serveur.
    cursor = collection.find {year: 1997}, {artist:true, title:true, _id:false}

    # La méthode toArray sur un curseur permet de transformer la liste des
    # objets reçus du serveur en un Array Javascript. N'utilisez toArray que
    # lorsque vos ensembles de données sont limités car ça pourrait consommer
    # beaucoup de mémoire si l'on reçoit beaucoup d'objets du serveur.
    cursor.toArray (err, albums) ->
      console.log "Albums publiés en 1997 :"
      for album in albums
        console.log "L'album #{album.title} de l'artiste #{album.artist}."
      db.close()
