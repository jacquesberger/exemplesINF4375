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

console.log("Avant la lecture du fichier");
fs.readFile("textfile", function(err, data) {
  console.log("Voici les données du fichier : " + data);
});

console.log("Après la lecture du fichier");

/*
 * Le code à l'intérieur du callback passé en paramètre à readFile ne
 * sera pas exécuté immédiatement, il sera exécuté après l'exécution du
 * reste du script. Du coup, le dernier console.log sera affiché avant celui
 * qui est dans le callback.
 */
