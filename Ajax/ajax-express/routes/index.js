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

exports.prog = function(req, res) {
  var data = {
    courses: [
      {identifier: "INF1120", title: "Programmation 1", credits: 3},
      {identifier: "INF2120", title: "Programmation 2", credits: 3}
    ]
  };

  res.render("tbody", data);
};

exports.progweb = function(req, res) {
  var data = {
    courses: [
      {identifier: "INF2005", title: "Programmation web", credits: 3},
      {identifier: "INF3005", title: "Programmation web avancée", credits: 3},
      {identifier: "INF4375", title: "Paradigmes des échanges Internet", credits: 3}
    ]
  };

  res.render("tbody", data);
};

exports.assembly = function(req, res) {
  var data = {
    courses: [
      {identifier: "INF2170", title: "Organisation des ordinateurs et assembleur", credits: 3},
      {identifier: "INF4170", title: "Architecture des ordinateurs", credits: 3}
    ]
  };

  res.render("tbody", data);
};
