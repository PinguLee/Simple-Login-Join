const http = require('http');
const fs = require('fs');

const port = 8080;

const ContentType = {
  'html' : {'Content-Type': 'text/html'},
  'css' : {'Content-Type': 'text/css'},
  'js' : {'Content-Type': 'application/javascript'}
};

const server = http.createServer((request, response) => {
  if (request.method === 'GET' && request.url === '/') {
    response.writeHead(200, ContentType.html);
    response.end(fs.readFileSync('./index.html', 'utf8'));
  } else if (request.method === 'GET' && request.url === '/css/style.css') {
    response.writeHead(200, ContentType.css);
    response.end(fs.readFileSync('./css/style.css' , 'utf8'));
  } else if (request.method === 'GET' && request.url === '/scripts/script.js') {
    response.writeHead(200, ContentType.js);
    response.end(fs.readFileSync('./scripts/script.js', 'utf8'));
  } else {
    response.writeHead(404, ContentType.html);
    response.end('404 ERROR');
  }
});

server.listen(8080, () => {
  console.log('서버 가동 중');
});