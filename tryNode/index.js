var server = require("./tryNode/server");
var router = require("./tryNode/router");
var requestHandlers = require("./tryNode/requestHandler");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route,handle);
