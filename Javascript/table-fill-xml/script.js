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

function getXmlDom() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "data.xml", false);
  xhr.send();
  return xhr.responseXML;
}

function fillTable() {
  var htmlResult = "";
  var xmlDom = getXmlDom();

  var courseList = xmlDom.getElementsByTagName("cours");
  for (var i = 0; i < courseList.length; i++) {
    var course = courseList[i];
    htmlResult += "<tr><td>" +
      course.getElementsByTagName("sigle")[0].textContent +
      "</td><td>" + course.getElementsByTagName("titre")[0].textContent +
      "</td></tr>";
  }

  var tbodyElement = document.getElementsByTagName("tbody")[0];
  tbodyElement.innerHTML = htmlResult;
}

