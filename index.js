var http = require('http');  

http.createServer(function(req, res) {
  console.log(new Date(), req.url);
  if (req.url == '/' || req.url == '/healthcheck') {
    res.writeHeader(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(process.env));
  } else {
    res.writeHeader(404);
  }
  res.end();
}).listen(process.env.PORT || 3000);

console.log('Server Running on ' + (process.env.PORT || '3000'));