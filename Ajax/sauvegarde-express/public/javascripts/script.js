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

function save() {
  var objectToSave = buildObject();
  saveToServer(objectToSave, displayResult);
}

function buildObject() {
  var result = {};
  result.firstname = document.getElementById("form-firstname").value;
  result.lastname = document.getElementById("form-lastname").value;
  result.age = parseInt(document.getElementById("form-age").value, 10);
  return result;
}

function displayResult(savedObject) {
  var element = document.getElementById("result");
  element.innerHTML = "Document sauvegardé : " + JSON.stringify(savedObject);
}

function saveToServer(objectToSave, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("PUT", "/save", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(objectToSave);
    }
  };
  var jsonData = JSON.stringify(objectToSave);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(jsonData);
}
