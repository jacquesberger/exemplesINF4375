/*
 * Copyright 2013 Jacques Berger.
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

exports.index = function(req, res) {
  res.render('index');
};

exports.save = function(req, res) {
  var objectToSave = req.body;

  // Il ne reste qu'à sauvegarder les données dans la base de données de votre
  // choix.
  console.log("Objet à sauvegarder :", objectToSave);

  res.send(200);
};
