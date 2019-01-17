var lti = require('ims-lti');
const http = require('http');

var provider = new lti.Provider consumer_key, consumer_secret, [nonce_store=MemoryStore], [signature_method=HMAC_SHA1]

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
