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

    # Supprimons The Eye de King Diamond. Le deuxième paramètre au callback
    # indique le nombre d'objets qui ont été supprimés.
    collection.remove {artist: "King Diamond", title: "The Eye"}, (err, number) ->
      if number > 0
        plural = if number > 1 then "s" else ""
        console.log "Album#{plural} supprimé#{plural}"
      db.close()
