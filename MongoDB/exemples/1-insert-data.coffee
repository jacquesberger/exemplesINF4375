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

mongo = require "mongodb"

# Note : Cet exemple ne contient aucune gestion d'erreur.

# Représente une connexion au serveur de données.
server = new mongo.Server "localhost", 27017

# Un accès à la base de données inf4375 du serveur spécifié. Le troisième
# paramètre indique que les callbacks ne seront appelés que lorsque l'opération
# sera terminée (succès ou échec) sur le serveur.
db = new mongo.Db "inf4375", server, {safe:true}

# Ouverture de la base de données. Une fois l'ouverture terminée, le callback
# passé en paramètre est appelé. Le paramètre err contient l'erreur si une
# erreur est survenue, le paramètre db contient la base de données ouverte.
db.open (err, db) ->

  # Se positionner sur une collection en particulier. C'est sur la collection
  # que l'on peut effectuer la plupart des opérations, comme l'insertion de
  # données. La collection est passée en paramètre au callback.
  db.collection "disco", (err, collection) ->

    singleData =
      artist: "Katra"
      title: "Beast Within"
      year: 2008

    # Insertion d'un seul enregistrement.
    collection.insert singleData, (err, result) ->

      multipleData = [
        artist: "Néodyme"
        title: "La tour"
        year: 2010
       ,
        artist: "Iced Earth"
        title: "The Dark Saga"
        year: 1996
       ,
        artist: "Bruce Dickinson"
        title: "Accident of Birth"
        year: 1997
       ,
        artist: "Children of Bodom"
        title: "Something Wild"
        year: 1997
       ,
        artist: "Dio"
        title: "Holy Diver"
        year: 1983
       ,
        artist: "In Flames"
        title: "Sense of Purpose"
        year: 2008
       ,
        artist: "King Diamond"
        title: "The Eye"
        year: 1990
      ]

      # Insertion de plusieurs enregistrements en même temps.
      collection.insert multipleData, (err, result) ->

        # On affiche la liste complète des albums dans la collection pour
        # montrer que les deux insertions ont bien fonctionnées.
        collection.find().toArray (err, albums) ->
          for album in albums
            console.log "L'album #{album.title} de l'artiste #{album.artist} a été publié en #{album.year}."

          # On ferme la connexion à la base de données.
          db.close()
