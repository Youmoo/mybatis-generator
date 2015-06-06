'use strict';

var mysql = require("mysql");

module.exports = function createPool(config, server) {
    server.pool = mysql.createPool(config);
    server.pool.on("error", function (err) {
        console.error("[db error]:", err);
        server.pool = mysql.createPool(config);
    });
};