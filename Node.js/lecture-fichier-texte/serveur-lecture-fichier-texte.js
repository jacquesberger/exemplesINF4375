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

var fs = require("fs");
var http = require("http");

// Production du document HTML qui sera retourné par le serveur.
function generateHtmlDocument(title, data) {
  return "<!DOCTYPE html><html><head><meta charset='utf-8'><title>" +
         title + "</title></head><body><p>" + data + "</p></body></html>";
}

// Création du serveur http.
http.createServer(function (req, res) {

  // Ce callback sera exécuté à chaque demande de connexion sur le serveur.

  fs.readFile("textfile", function(err, data) {
    if (err) {
      // En cas d'erreur, nous retournons au fureteur un code http 404 avec un
      // document html contenant un message d'erreur.
      res.writeHead(404, {"Content-Type": "text/html"});
      res.write(generateHtmlDocument("File not found!", 
                             "The requested file was not found on the server."));
    } else {
      // En cas de succès, nous retournons au fureteur un code http 200 avec un
      // document html contenant le fichier texte.
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(generateHtmlDocument("File content", data));
    }
    // La méthode end envoie la réponse au fureteur.
    res.end();
  });

}).listen(3000);
// La méthode listen démarre l'écoute sur le socket. Le paramètre correspond au
// port que le serveur écoute.
