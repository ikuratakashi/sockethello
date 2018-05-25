var fs = require('fs');
var http = require('http');

//HTTPサーバを作成
var server = http.createServer();
var io = require('socket.io').listen(server);

server.on('request', function(req,res){
    fs.readFile('client.html', function (err,data){
        if(err){
            res.writeHead(500);
            return res.end('Error loading client.html');
        }

        //コメント

        res.writeHead(200,{
            'Content-Type':'text/html; charset=UTF-8'
        });
        res.end(data);
    });
});
server.listen(8080);

//リクエスト受診時の処理
io.sockets.on('connection',function(socket){
    //greeting イベントを発生させる
    socket.emit('greeting',{message:'hello,  '}, function (data){
        console.log('request:   ' + data);
    });
});