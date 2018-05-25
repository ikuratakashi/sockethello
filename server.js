var fs = require('fs');
var http = require('http');

//HTTPサーバを作成
var server = http.createServer();
var io = require('socket.io').listen(server);
