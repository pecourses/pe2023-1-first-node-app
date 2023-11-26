const http = require('http');

// 1 Create server
const server = http.createServer((request, response) => {
  // console.log('Hello from server');
  console.log('request.url :>> ', request.url);
  console.log('request.method :>> ', request.method);

  response.statusCode = 200;
  response.end('result');
});

// 2 Run server
// http://localhost:5000
server.listen(5000, () => console.log('Server is listening port 5000'));
