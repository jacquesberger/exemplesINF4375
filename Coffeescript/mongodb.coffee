mongo =  require "mongodb"

server = new mongo.Server "localhost", 27017
db = new mongo.Db "inf4375", server, {safe:true}

db.open (err, db) ->
  db.collection "disco", (err, collection) ->
    collection.find({}).toArray (err, albums) ->
      for album in albums
        console.log "L'album #{album.title} de l'artiste #{album.artist} a été publié en #{album.year}."
      db.close()
