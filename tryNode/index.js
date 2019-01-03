var server = require("./tryNode/server");
var router = require("./tryNode/router");
server.start(router.route);
