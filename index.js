const http = require('http');
const { readFile } = require('fs/promises');

// 1 Create server
const server = http.createServer((request, response) => {
  console.log('request.url :>> ', request.url);
  console.log('request.method :>> ', request.method);
  // / => homepage
  // /about => aboutpage

  readFile('./pages/index.html', { encoding: 'utf-8' })
    .then(fileText => {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      response.end(fileText);
    })
    .catch(err => {
      response.statusCode = 500;
      response.end('error');
    });
});

// 2 Run server
// http://localhost:5000
server.listen(5000, () => console.log('Server is listening port 5000'));
