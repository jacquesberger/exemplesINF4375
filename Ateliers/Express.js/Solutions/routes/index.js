/*
 * Copyright 2016 Jacques Berger.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var express = require('express');
var request = require('request');

function getData(callback) {
  request.get('http://localhost:8888/', function (err, response) {
    if (err) {
      callback(err);
    } else {
      var rawData = response.body;
      var data = JSON.parse(rawData);
      callback(null, data);
    }
  });
}

var router = express.Router();

router.get('/', function(req, res) {
  getData(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.render('index', {title: 'Liste de cours', liste_de_cours: data});
    }
  });
});

router.get('/json', function(req, res) {
  getData(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

router.get('/xml', function(req, res) {
  getData(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.header("Content-Type", "application/xml");
      res.render('xml', {liste_de_cours: data});
    }
  });
});

module.exports = router;
