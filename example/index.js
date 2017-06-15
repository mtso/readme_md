const readme = require('readme_md');
const http = require('http');

const server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(readme.markup);
  res.end();
});

server.listen(process.env.PORT);
