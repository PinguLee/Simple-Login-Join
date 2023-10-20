const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const port = require('./public/javascripts/module/port')
const ContentType = require('./public/javascripts/module/contentType')
const signUpAsset = require('./public/javascripts/module/signUpAsset');
const validation = require('./public/javascripts/module/validation');
const doc = require('./public/javascripts/module/doc');



const server = http.createServer((request, response) => {
  const error404 = () => {
    response.writeHead(404, ContentType.html);
    response.end('404 ERROR');
  }

  switch (request.method === 'GET') {
    case request.url === '/':
      response.writeHead(200, ContentType.html);
      response.end(fs.readFileSync('./public/index.html', 'utf8'));
      break;

    case request.url === '/join':
      response.writeHead(200, ContentType.html);
      response.end(fs.readFileSync('./public/join.html', 'utf8'));
      break;

    case request.url === '/stylesheets/style.css':
      response.writeHead(200, ContentType.css);
      response.end(fs.readFileSync('./public/stylesheets/style.css', 'utf8'));
      break;

    case request.url === '/stylesheets/hiddenText.css':
      response.writeHead(200, ContentType.css);
      response.end(fs.readFileSync('./public/stylesheets/hiddenText.css', 'utf8'));
      break;

    case request.url === '/javascripts/script.js':
      response.writeHead(200, ContentType.js);
      response.end(fs.readFileSync('./public/javascripts/script.js', 'utf8'));
      break;

    case request.url === '/javascripts/moveIDPW':
      response.writeHead(200, ContentType.js);
      response.end(fs.readFileSync('./public/javascripts/script.js', 'utf8'));
      break;

    default:
      error404;
  }

  switch (request.method === 'POST') {
    case request.url === '/login':
      let login_body = "";

      request.on('data', (chunk) => {
        login_body += chunk.toString();
      });
      request.on('end', () => {
        const { id, pw } = querystring.parse(login_body);
        // const data = doc.one + id + doc.two;
        fs.writeFileSync('./public/success.html', doc)
        if (validation(id, pw)) {
          signUpAsset.id = id;
          signUpAsset.pw = pw;
          response.writeHead(200, ContentType.html);
          response.end(fs.readFileSync('./public/success.html', 'utf8'));
        } else {
          response.end(fs.readFileSync('./public/index.html', 'utf8'));
        }
      });

    case request.url === '/create':
      let create_body = "";

      request.on('data', (chunk) => {
        create_body += chunk.toString();
      });
      request.on('end', () => {
        const { name, id, pw1, pw2, email } = querystring.parse(create_body);
        fs.writeFileSync('./public/join.html', data);
        if (validation(name, id, pw1, pw2, email)) {
          signUpAsset.name = name;
          signUpAsset.id = id;
          signUpAsset.pw = pw1;
          signUpAsset.email = email;
          response.writeHead(200, ContentType.html);
          response.end(fs.readFileSync('./public/join.html', 'utf8'));
        }
      });

    case request.url === '/send':
      let send_body = "";
      response.writeHead(200, ContentType.html);
      request.on('data', (chunk) => {
        send_body += chunk.toString();
      });
      request.on('end', () => {
        const { title, text } = querystring.parse(send_body);
        console.log(`제목: ${title}`);
        console.log(`내용: ${text}`);
      });
      response.end(fs.readFileSync('./public/index.html', 'utf8'));

    default:
      error404;
  }
});

server.listen(port, () => {
  console.log('http://localhost:8080/');
});