const markup = require('readme_md');
const http = require('http');

const server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(markup);
  res.end();
});

server.listen(process.env.PORT);
