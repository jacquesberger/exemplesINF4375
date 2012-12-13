http = require "http"
jberger = require "./jberger.js"

server = http.createServer (req, res) ->
  jberger.extractNumberOfPosts (err, postNumber) ->
    if err
      res.writeHead 500,
        "Content-Type": "text/plain"
      res.write "Server error: " + err
      res.end()
    else
      res.writeHead 200,
        "Content-Type": "text/html"
      res.write """
<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <title>Number of posts</title>
  </head>
  <body>
    <p>There is #{postNumber} blog posts on jberger.org.</p>
  </body>
</html>"""
      res.end()
server.listen 3000