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