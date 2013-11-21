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

    # C'est le même exemple que le précédent mais avec une utilisation
    # différente du curseur.
    cursor = collection.find {year: 1997}, {artist:true, title:true, _id:false}
    console.log "Albums publiés en 1997 :"

    # Le callback est appelé pour chaque objet retourné par le serveur. La
    # difficulté ici est d'appeler la méthode close uniquement après que tous
    # les objets aient été traité, sinon la liste d'objet serait incomplète. Le
    # dernier callback qui sera lancé recevra null dans le deuxième paramètre,
    # on peut donc fermer la connexion à ce moment.
    cursor.each (err, album) ->
      if album
        console.log "L'album #{album.title} de l'artiste #{album.artist}."
      else
        db.close()
