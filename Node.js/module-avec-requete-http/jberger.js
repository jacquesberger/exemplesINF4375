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

var http = require("http");

// Cette fonction fait une requête http sur le site jberger.org et extrait son
// contenu (un document HTML). On va ensuite trouver le nombre de publication
// sur ce blog et appeler en callback en lui spécifiant ce nombre de
// publications.
function extractNumberOfPosts(callback) {
  // Les paramètres de la requête http.
  var options = {
    host: "www.jberger.org",
    method: "GET"
  };

  // On initialise la requête http. On spécifie le callback à invoquer lorsque
  // le résultat de la requête sera reçu.
  var request = http.request(options, function (result) {
    // La réponse http a été reçue.
    if (result.statusCode !== 200) {
      callback("HTTP Error: " + result.statusCode);
    } else {
      var chunks = [];
      result.setEncoding("utf-8");
      
      // La réponse est reçue en plusieurs morceaux et chaque morceau lancera un
      // événement 'data'. Nous allons écouter les événements 'data' et
      // accumuler les fragments de html.
      result.on("data", function (chunk) {
        chunks.push(chunk);
      });

      // Lorsque tous les fragments ont été reçus, l'événement 'end' est
      // invoqué.
      result.on("end", function () {
        var completeHtmlData = chunks.join("");
        var list = completeHtmlData.match(/<div class="post">/g);
        callback(null, list.length);
      });
    }
  });
  
  // En cas d'erreur, on appelle un callback de gestion d'erreur.
  request.on("error", function (e) {
    callback(e);
  });
  
  // On envoie la requête http.
  request.end();
}

// On publie la fonctionnalité à l'extérieur du module.
exports.extractNumberOfPosts = extractNumberOfPosts;
