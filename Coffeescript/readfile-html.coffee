fs = require "fs"
http = require "http"

generateHtmlDocument = (title, data) ->
  """
<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <title>#{title}</title>
  </head>
  <body>
  <p>#{data}</p>
  </body>
</html>"""

server = http.createServer (req, res) ->
  fs.readFile "textfile", (err, data) ->
    if err
      res.writeHead 404,
        "Content-Type": "text/html"
      res.write generateHtmlDocument "File not found!", "The requested file was not found on the server."
      res.end()
    else
      res.writeHead 200,
        "Content-Type": "text/html"
      res.write generateHtmlDocument "File content", data
      res.end()
server.listen 3000