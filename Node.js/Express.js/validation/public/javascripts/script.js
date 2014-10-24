/*
 * Copyright 2014 Jacques Berger.
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

function testJsonValide() {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/json", false);
  xhr.setRequestHeader("Content-type", "application/json");
  var data = {
    nom: "Berger",
    prenom: "Jacques",
    age: 31
  };
  xhr.send(JSON.stringify(data));
  document.getElementById("json-valide").innerHTML = xhr.status;
}

function testJsonInvalide() {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/json", false);
  xhr.setRequestHeader("Content-type", "application/json");
  var data = {
    nom: "Berger",
    age: 31
  };
  xhr.send(JSON.stringify(data));
  document.getElementById("json-invalide").innerHTML = xhr.status;
}
