const http = require('http');

const server = createServer(function(req, res){

})

const port = 3000;

server.listen(port, function(error) {
  if (error) {
    console.log('somethings wrong chris:(' + error)
  } else { 
    console.log('server is listening on port' + port)
  }
})