// Copyright 2014 Jacques Berger.
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

var express = require('express');
var db = require('./db.js');
var router = express.Router();

router.get('/', function(req, res) {
  db.getConnection(function(err, db){  
    db.collection('disco', function (err, disco) {
      if (err) {
        res.send(500);
      } else {
        disco.find().toArray(function (err, albums) {
          if (err) {
            res.send(500);
          } else {
            res.json(albums);
          }
        });
      }
    });
  });
});

module.exports = router;
