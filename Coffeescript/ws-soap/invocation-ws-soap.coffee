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