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

/* On importe le module http à l'aide de la fonction require. Le module http est
 * un module global qui vient avec Node.js, il n'est donc pas nécessaire de
 * faire un 'npm install' pour l'utiliser. */

var http = require("http");

/* La méthode createServer crée un serveur http et le callback passé en
 * paramètre sera exécuté pour chaque requête http reçue. Le callback prend en
 * paramètre un objet représentant la requête reçue (req) et un objet
 * représentant la réponse à envoyer (res). Nous devons écrire la réponse avec
 * le paramètre res. Pour l'instant, le serveur est créé mais n'écoute pas les
 * requêtes entrantes. C'est uniquement lors de l'appel à la méthode listen que
 * le serveur commence son écoute sur le port 3000. */

http.createServer(function(req, res) {
  /* Cette fonction est exécutée pour chaque requête entrante. Nous devons y
   * produire la réponse à envoyer au client. */

  /* La méthode writeHead permet d'écrire les propriétés de l'entête HTTP de la
   * réponse. Ici, on place le code HTTP 200 (OK) et on spécifie le MIME Type de
   * la réponse à text/plain. */
	res.writeHead(200, {"Content-Type" : "text/plain"});

  /* La méthode write permet d'écrire dans le corps de la réponse HTTP. On peut
   * faire autant d'appel à write que désiré. */
	res.write("Hello World!");

  /* Lors de l'appel à la méthode end, la réponse est envoyée au client. */
	res.end();
}).listen(3000);
