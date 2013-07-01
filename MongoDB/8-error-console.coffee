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

# Note : Gestion d'erreur minimaliste en affichant simplement les erreurs à la
# console.

server = new mongo.Server "localhost", 27017
db = new mongo.Db "inf4375", server, {safe:true}

# Les callbacks reçoivent tous un paramètre err indiquant si une erreur est
# survenue. Ce paramètre est null en l'absence d'erreur
db.open (err, db) ->
  if err
    console.log err
  else
    db.collection "disco", (err, collection) ->
      if err
        console.log err
        db.close()
      else
        album =
          artist: "Korn"
          title: "Follow the Leader"
          year: 1998

        collection.insert album, (err, result) ->
          if err
            console.log err
            db.close()
          else
            id = result[0]._id.toString()

            collection.update {_id: new mongo.BSONPure.ObjectID id}, {$set: {great: true}}, (err, result) ->
              if err
                console.log err
                db.close()
              else
                collection.remove {_id: new mongo.BSONPure.ObjectID id}, (err, number) ->
                  if err
                    console.log err
                  db.close()
