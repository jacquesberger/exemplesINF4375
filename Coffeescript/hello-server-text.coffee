http = require "http"

server = http.createServer (req, res) ->
  res.writeHead 200,
    "Content-Type": "text/plain"
  res.write "Hello World!"
  res.end()
server.listen 3000