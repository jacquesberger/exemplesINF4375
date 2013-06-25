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

getCourseName = (identifier) ->
  xmlDocument = """
    <?xml version='1.0' encoding='UTF-8'?>
    <S:Envelope xmlns:S='http://schemas.xmlsoap.org/soap/envelope/'>
      <S:Header/>
      <S:Body>
        <ns2:getCourseName xmlns:ns2='http://course.services.jberger.org/'>
          <identifier>#{identifier}</identifier>
        </ns2:getCourseName>
      </S:Body>
    </S:Envelope>
  """

  request = new XMLHttpRequest()
  request.open "POST", "http://localhost:8080/CourseName/CourseNameService", false
  request.setRequestHeader "Content-Type", "text/xml"
  request.setRequestHeader "SOAPAction", ""
  request.send xmlDocument
  (request.responseXML.getElementsByTagName "return")[0].textContent

processOperation = ->
  textBoxElement = document.getElementById "courseid"
  courseName = getCourseName textBoxElement.value
  responseElement = document.getElementById "response"
  responseElement.innerHTML = courseName
