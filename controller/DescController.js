'use strict';

var normalize = require('../support/normalize');

/**
 * desc table
 */
module.exports = function descController(req, res, next) {
    var provider = require('../provider/' + this.provider + '/desc');

    provider(req.params.table, this.pool).then(function (result) {
        if (result.ok) {
            result.rows = normalize(result.rows);
        }
        result.table = req.params.table;
        res.send(result);
    });
};