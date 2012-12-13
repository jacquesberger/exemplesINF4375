http = require "http"

server = http.createServer (req, res) ->
  res.writeHead 200, 
    "Content-Type" : "text/html"
  res.write """
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset='utf-8'>
        <title>Hello World en HTML</title>
      </head>
      <body>    
        <p>Hello World</p>
      </body>
    </html>"""
  res.end()
server.listen 3000