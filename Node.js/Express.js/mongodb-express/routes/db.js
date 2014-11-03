// Copyright 2014 Jacques Berger.
// Inspiré du travail d'Alexandar Dimitrov à l'été 2014.
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

var mongodb = require("mongodb");

var instanceMongoDB;

module.exports.getConnection = function(callback) {
  if (instanceMongoDB) {
    callback(null, instanceMongoDB);
  } else {
    var server = new mongodb.Server("localhost", 27017, {auto_reconnect: true});
    var db = new mongodb.Db("inf4375", server, {safe: true});

    if (!db.openCalled) {
      db.open(function(err, db) {
        if (err) {
          callback(err);
        }
        instanceMongoDB = db;
        callback(err, instanceMongoDB);
      });
    }
  }
};
