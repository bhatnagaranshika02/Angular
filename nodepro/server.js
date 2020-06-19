const http = require('http')
const webserver = http.createServer(function(request,response){
  
response.write("<h1>My first node.</h1>");
response.end()

})

webserver.listen(9999)