#!/usr/local/bin/node

var restify = require('restify');
var controllers = require("./controller/controllers");
var pool = require('./db');

var server = restify.createServer({
    name: 'myapp',
    version: '1.0.0'
});
var config = process.argv[2];
if (!config) {
    throw new Error('config参数不可缺少');
}
if (!(config[0] === '/' || config[0] === '.')) {
    config = './' + config;
}

server.pool = require('./db')(require(config));

//server.provider = 'file';//从哪里取数据
server.provider = 'mysql';//从哪里取数据

server.get(/\/.*\.(html|css|js)/, restify.serveStatic({
    directory: __dirname + '/views',
    default: 'index.html'
}));

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());


server.use(
    function crossOrigin(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        return next();
    }
);

Object.keys(controllers).forEach(function (key) {
    server.get(key, controllers[key]);
});

server.get('/', function (req, res) {
    console.log(__dirname)
    res.header('Location', '/index.html');
    res.send(302);
});

server.listen(8888, function () {
    console.log('%s listening at %s', server.name, server.url);
});