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

var http = require("http");

var data = [
  {
    sigle: "INF1256",
    titre: "Informatique pour les sciences de la gestion",
    credits: 3,
    horaire: ["lundi, 18h00 à 21h00", "samedi, 12h30 à 14h30"],
    offert_hiver: true
  },
  {
    sigle: "INF2005",
    titre: "Programmation web",
    credits: 3,
    horaire: ["lundi, 15h00 à 18h00", "mercredi, 12h30 à 14h30"],
    offert_hiver: true
  },
  {
    sigle: "INF2015",
    titre: "Développement de logiciels dans un environnement Agile",
    credits: 3,
    horaire: ["jeudi, 17h30 à 22h30"],
    offert_hiver: true
  },
  {
    sigle: "INF3135",
    titre: "Construction et maintenance des logiciels",
    credits: 3,
    horaire: ["lundi, 13h00 à 16h00", "mardi, 12h30 à 14h30"],
    offert_hiver: true
  },
  {
    sigle: "INF3180",
    titre: "Fichiers et bases de données",
    credits: 3,
    horaire: ["lundi, 18h00 à 21h00", "jeudi, 18h00 à 20h00"],
    offert_hiver: true
  },
  {
    sigle: "INF4150",
    titre: "Interfaces personnes-machines",
    credits: 3,
    horaire: [],
    offert_hiver: false
  },
  {
    sigle: "INF4170",
    titre: "Architecture des ordinateurs",
    credits: 3,
    horaire: ["lundi, 18h00 à 21h00", "mardi, de 13h00 à 16h00", "samedi, 12h30 à 14h30"],
    offert_hiver: true
  },
  {
    sigle: "INF4375",
    titre: "Paradigmes des échanges Internet",
    credits: 3,
    horaire: [],
    offert_hiver: false
  },
  {
    sigle: "INM5151",
    titre: "Projet d'analyse et de modélisation",
    credits: 3,
    horaire: ["lundi, 18h00 à 21h00"],
    offert_hiver: true
  },
  {
    sigle: "MGL7460",
    titre: "Réalisation et maintenance des logiciels",
    credits: 3,
    horaire: [],
    offert_hiver: false
  },
  {
    sigle: "INF3172",
    titre: "Principes des systèmes d'exploitation",
    credits: 3,
    horaire: ["vendredi, 12h30 à 14h30"],
    offert_hiver: true
  },
  {
    sigle: "INF5153",
    titre: "Génie logiciel : conception",
    credits: 3,
    horaire: ["lundi, 18h00 à 21h00", "samedi, 12h30 à 14h30"],
    offert_hiver: true
  }
];

http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type" : "application/json"});
	res.write(JSON.stringify(data));
	res.end();
}).listen(8888);
