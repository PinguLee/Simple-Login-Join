const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const port = 8080;

const ContentType = {
  'plain': { 'Content-Type': 'text/plain' },
  'html': { 'Content-Type': 'text/html' },
  'css': { 'Content-Type': 'text/css' },
  'js': { 'Content-Type': 'application/javascript' }
};

const server = http.createServer((request, response) => {
  if (request.method === 'POST' && request.url === '/') {
    let temp = "";
    request.on('data', (chunk) => {
      body += chunk.toString();
    });
    request.on('end', () => {
      const parseTemp = querystring.parse(temp);
      const { id, pw } = parseTemp;

      console.log(parseTemp);
      console.log(id);
      console.log(pw);
    });
    response.writeHead(200, ContentType.plain);
    response.end('로그인 성공');
  } else if (request.method === 'GET' && request.url === '/css/style.css') {
    response.writeHead(200, ContentType.css);
    response.end(fs.readFileSync('./css/style.css', 'utf8'));
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