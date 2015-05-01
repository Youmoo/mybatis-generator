'use strict';

function desc(table,pool) {
    return new Promise(function (resolve) {
        pool.query('desc ' + table, function (err, rows) {
            if (err) {
                resolve({
                    ok: false,
                    err: err
                })
            } else {
                resolve({
                    ok: true,
                    rows: rows
                })
            }
        });
    })


}
module.exports = desc;