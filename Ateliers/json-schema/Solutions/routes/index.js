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
var jsonschema = require('jsonschema');
var schemas = require('./schemas'); 


router.post('/dossiers', function(req, res) {
  var result = jsonschema.validate(req.body, schemas.createCustomer);
  if (result.errors.length > 0) {
    res.status(400).json(result);
  } else {
    db.getConnection(function(err, db){  
      db.collection('dossiers', function (err, collection) {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          req.body.date_naissance = new Date(req.body.date_naissance);
          collection.insert(req.body, function(err, result) {
            if (err) {
              console.log(err);
              res.sendStatus(500);
            } else {
              res.status(201).json(result.ops[0]);
            }
          });
        }
      });
    });
  }
});

router.put('/dossiers/:id', function(req, res) {
  var result = jsonschema.validate(req.body, schemas.updateCustomer);
  if (result.errors.length > 0) {
    res.status(400).json(result);
  } else {
    db.getConnection(function(err, db){  
      db.collection('dossiers', function (err, collection) {
        if (err) {
          res.sendStatus(500);
        } else {
          if (req.body.date_naissance) {
            req.body.date_naissance = new Date(req.body.date_naissance);
          }
          collection.update({_id: new mongodb.ObjectId(req.params.id)}, {$set:req.body}, function(err, result) {
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
  }
});

module.exports = router;
