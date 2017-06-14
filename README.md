# readme_md

Automagically generate markup from README.md

## Install

```
$ npm install --save readme_md
```

## Usage

```js
const markup = require('readme_md');
const http = require('http');

const server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(markup);
  res.end();
});

server.listen(process.env.PORT);
```
