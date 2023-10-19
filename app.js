const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const port = 8080;
let a = "";

const ContentType = {
  'plain': { 'Content-Type': 'text/plain; charset=utf8' },
  'html': { 'Content-Type': 'text/html; charset=utf8' },
  'css': { 'Content-Type': 'text/css; charset=utf8' },
  'js': { 'Content-Type': 'application/javascript; charset=utf8' }
};

const server = http.createServer((request, response) => {
  if (request.method === 'GET' && request.url === '/') {
    response.writeHead(200, ContentType.html);
    response.end(fs.readFileSync('./index.html', 'utf8'));
  }

  else if (request.method === 'GET' && request.url === '/css/style.css') {
    response.writeHead(200, ContentType.css);
    response.end(fs.readFileSync('./css/style.css', 'utf8'));
  }

  else if (request.method === 'GET' && request.url === '/scripts/script.js') {
    response.writeHead(200, ContentType.js);
    response.end(fs.readFileSync('./scripts/script.js', 'utf8'));
  }

  else if (request.method === 'POST' && request.url === '/login') {
    let body = "";
    response.writeHead(200, ContentType.html);
    request.on('data', (chunk) => {
      body += chunk.toString();
    });
    request.on('end', () => {
      const { id, pw1, pw2, email } = querystring.parse(body);
      fs.writeFileSync("./db.log", id);
      console.log(id, pw1, pw2, email);
    });
    response.end(fs.readFileSync('./success.html', 'utf8'));
  }

  else if (request.method === 'POST' && request.url === '/send') {
    let body = "";
    response.writeHead(200, ContentType.html);
    request.on('data', (chunk) => {
      body += chunk.toString();
    });
    request.on('end', () => {
      const { title, text } = querystring.parse(body);
      console.log(`제목: ${title}`);
      console.log(`내용: ${text}`);
    });
    response.end(fs.readFileSync('./index.html', 'utf8'));
  }

  else if (request.method === 'GET' && request.url === '/scripts/readF.js') {
    response.writeHead(200, ContentType.js);
    response.end(fs.readFileSync('./scripts/readF.js', 'utf8'));
  }

  else {
    response.writeHead(404, ContentType.html);
    response.end('404 ERROR');
  }
});

server.listen(8080, () => {
  console.log('서버 가동 중 : http://localhost:8080/');
});