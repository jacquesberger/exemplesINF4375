# Copyright 2012 Jacques Berger.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

request = null

createRequestObject = ->
  try
    request = new XMLHttpRequest()
  catch err
    alert "Error creating XMLHttpRequest object!"
    request = null

reload = ->
  if request is null
    createRequestObject()

  url = "time.php"
  request.open "GET", url, true

  request.onreadystatechange = ->
    if request.readyState is 4
      jsonObject = JSON.parse request.responseText
      
      timeContainer = document.getElementById "time"
      timeContainer.innerHTML = jsonObject.time
            
      dateContainer = document.getElementById "date"
      dateContainer.innerHTML = jsonObject.date

  request.send()
