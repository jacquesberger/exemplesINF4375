// Copyright 2016 Jacques Berger.
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

var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();
var db = require('./db');

router.get('/albums', function(req, res) {
  db.getConnection(function(err, db){  
    db.collection('albums', function (err, collection) {
      if (err) {
        res.sendStatus(500);
      } else {
        collection.find().toArray(function (err, albums) {
          if (err) {
            res.sendStatus(500);
          } else {
            res.json(albums);
          }
        });
      }
    });
  });
});

router.post('/albums', function(req, res) {
  db.getConnection(function(err, db){  
    db.collection('albums', function (err, collection) {
      if (err) {
        res.sendStatus(500);
      } else {
        collection.insert(req.body, function(err, result) {
          if (err) {
            res.sendStatus(500);
          } else {
            res.status(201).json(result.ops[0]);
          }
        });
      }
    });
  });
});

router.delete('/albums/:id', function(req, res) {
  db.getConnection(function(err, db){  
    db.collection('albums', function (err, collection) {
      if (err) {
        res.sendStatus(500);
      } else {
        collection.remove({_id: new mongodb.ObjectId(req.params.id)}, function(err, result) {
          if (err) {
            res.sendStatus(500);
          } else if (result.result.n === 0) {
            res.sendStatus(404);
          } else {
            res.sendStatus(200);
          }
        });
      }
    });
  });
});

router.put('/albums/:id', function(req, res) {
  db.getConnection(function(err, db){  
    db.collection('albums', function (err, collection) {
      if (err) {
        res.sendStatus(500);
      } else {
        collection.update({_id: new mongodb.ObjectId(req.params.id)}, {$set:{titre: req.body.titre, artiste: req.body.artiste}}, function(err, result) {
          if (err) {
            res.sendStatus(500);
          } else if (result.result.n === 0) {
            res.sendStatus(404);
          } else {
            res.sendStatus(200);
          }
        });
      }
    });
  });
});

module.exports = router;
