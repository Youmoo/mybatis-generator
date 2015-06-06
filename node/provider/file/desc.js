'use strict';

function desc(pool,table) {
    return new Promise(function (resolve) {
        try {
            var json = require('../../tables/' + table);
            resolve({
                ok: true,
                data: json
            });
        } catch (e) {
            resolve({
                ok: false,
                err: e
            });
        }
    })

}
module.exports = desc;