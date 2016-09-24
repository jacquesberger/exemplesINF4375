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
var db = db.getSiblingDB("dossiers");

// Exercice #1
db.createCollection("candidats");

// Exercice #2
var candidats = {
  nom: "Stevenson",
  prenom: "Steven",
  telephones: ["514-454-3322", "514-666-5443"],
  emplois: [{entreprise:"Gaz Métro", poste:"Vendeur", embauche:"2015-01-01", cessation:"2016-03-04"}]
};
db.candidats.insert(candidats);

// Exercice #3
var liste = [
  {
    nom: "Sanchez",
    prenom: "Roberto",
    telephones: ["514-454-1112"],
    emplois: [{entreprise:"Sanchez et frères, plomberie", poste:"Plombier", embauche: new Date(2013, 4, 13), cessation: new Date(2016, 1, 14)}]
  },
  {
    nom: "Sauvé",
    prenom: "Steve",
    telephones: ["514-114-7112"],
    emplois: [{entreprise:"Régis Côté, architectes", poste:"Technicien en informatique", embauche: new Date(2014, 6, 13), cessation: new Date(2016, 5, 14)}]
  },
  {
    nom: "Laloux",
    prenom: "Jacques",
    telephones: ["438-774-1812"],
    emplois: [{entreprise:"Les poudres métalliques du Québec", poste:"Journalier", embauche: new Date(1998, 4, 13), cessation: new Date(2016, 1, 14)}]
  }
];
db.candidats.insert(liste);

// Exercice #4
db.candidats.remove({_id:ObjectId("57e6091d92238cfa7c13bcb5")});

// Exercice #5
db.candidats.update({}, {$set:{nombre_tentatives:0}}, {multi:1});

// Exercice #6
db.candidats.update({_id:ObjectId("57e60cf692238cfa7c13bcb8")}, {$set:{nom: "Paris"}});

// Exercice #7
var emploi = {entreprise: "Les jardins 4 saisons", poste: "Directeur", embauche: new Date(1986, 0, 5), cessation: new Date(2015, 4, 22)};
db.candidats.update({_id:ObjectId("57e60cf692238cfa7c13bcb8")}, {$addToSet:{emplois: emploi}});

// Exercice #8
db.candidats.remove({});

// Exercice #9
db.dropDatabase();
