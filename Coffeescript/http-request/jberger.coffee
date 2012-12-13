http = require "http"

extractNumberOfPosts = (callback) ->
  options = 
    host: "www.jberger.org"
    method: "GET"

  request = http.request options, (result) ->
    if result.statusCode isnt 200
      callback "HTTP Error: " + result.statusCode
    else
      chunks = []
      result.setEncoding "utf-8"
      
      result.on "data", (chunk) ->
        chunks.push chunk

      result.on "end", ->
        completeHtmlData = chunks.join ""
        list = completeHtmlData.match /<div class="post">/g
        callback null, list.length
  
  request.on "error", (e) ->
    callback e
  
  request.end()

exports.extractNumberOfPosts = extractNumberOfPosts