/*
 * Copyright 2014 Jacques Berger.
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
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/signer', function(req, res) {
  res.render('signer');
});

router.post('/signature', function(req, res) {
  console.log("Nom :", req.body.nom);
  console.log("Prénom :", req.body.prenom);
  console.log("Municipalité :", req.body.municipalite);
  console.log("Courriel :", req.body.courriel);

  // C'est ici qu'on sauvegarderait les données.

  res.redirect('/merci');
});

router.get('/merci', function(req, res) {
  res.render('merci');
});

module.exports = router;
