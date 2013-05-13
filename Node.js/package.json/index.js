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
var xmldom = require("xmldom");
var xpath = require("xpath");

fs.readFile("document.xml", function(err, data) {
  if (err) {
    console.log("Error reading XML document");
  } else {
    var domRoot = new xmldom.DOMParser().parseFromString(data.toString());
    var count = xpath.select("count(//document[@type = 'book'])", domRoot);
    console.log("There is", count, "books in document.xml");
  }
});
