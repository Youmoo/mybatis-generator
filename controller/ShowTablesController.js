'use strict';

/**
 * show tables
 */
module.exports = function showTablesController(req, res, next) {
    var pool = this.pool;
    var db = pool.config.connectionConfig.database;
    var key = 'Tables_in_' + db;
    pool.query("show tables", function (err, rows) {
        if (err) {
            console.error(err);
            return;
        }
        res.send(rows.map(function (row) {
            return row[key]
        }));
    });
};