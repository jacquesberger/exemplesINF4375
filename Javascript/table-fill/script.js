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

var data = [
  {
    sigle: "INF2005",
    titre: "Programmation web"
  },
  {
    sigle: "INF2015",
    titre: "Développement de logiciels dans un environnement Agile"
  },
  {
    sigle: "INF4170",
    titre: "Architecture des ordinateurs"
  },
  {
    sigle: "INF4375",
    titre: "Paradigmes des échanges Internet"
  },
  {
    sigle: "INM5151",
    titre: "Projet d'analyse et de modélisation"
  },
  {
    sigle: "MGL7460",
    titre: "Réalisation et maintenance des logiciels"
  }
];

function fillTable() {
  var htmlResult = "";

  for (var i = 0; i < data.length; i++) {
    var currentObject = data[i];
    htmlResult += "<tr><td>" + currentObject.sigle +
      "</td><td>" + currentObject.titre + "</td></tr>";
  }

  var tbodyElement = document.getElementsByTagName("tbody")[0];
  tbodyElement.innerHTML = htmlResult;
}

