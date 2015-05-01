'use strict';

var mysql = require("mysql");

module.exports = function createPool(config) {
    var pool = mysql.createPool(config);
    pool.on("error", function (err) {
        console.error("[db error]:", err);
        pool = mysql.createPool(config);
    });
    return pool;
};