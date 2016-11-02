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

var jsonschema = require('jsonschema');

var schema = {
  type: "object",
  required: true,
  properties: {
    age: {
      type: "number",
      required: false
    },
    nom: {
      type: "string",
      required: true
    },
    prenom: {
      type: "string",
      required: true
    }
  }
}

router.get('/', function(req, res) {
  res.render('test');
});

router.post('/json', function(req, res) {
  var data = req.body;
  var validate = require('jsonschema').validate;
  var result = validate(data, schema);
  if (result.errors.length === 0) {
    res.sendStatus(201);
  } else {
    res.status(400).json(result);
  }
});

module.exports = router;
