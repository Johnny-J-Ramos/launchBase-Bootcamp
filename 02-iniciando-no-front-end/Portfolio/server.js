const express = require('express');
const server = express();

server.get('/', function (req, res) {
  return res.send('Hello, how are you? and you?');
});

server.listen(5000, function () {
  console.log('modelo');
});
