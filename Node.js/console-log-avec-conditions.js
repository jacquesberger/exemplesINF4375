/*
 * Copyright 2012 Jacques Berger.
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

var moisEnMots = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre"
  ];

var dateDuJour = new Date();
var jour = dateDuJour.getDate();

var chaine = jour;
if (jour === 1) {
  chaine += "er";
}
chaine += " ";
chaine += moisEnMots[dateDuJour.getMonth()];
chaine += " ";
chaine += dateDuJour.getFullYear();

console.log(chaine);

if ((dateDuJour.getFullYear() % 4) === 0) {
  console.log("C'est une année bissextile.");
} else {
  console.log("Ce n'est pas une année bissextile.");
}
