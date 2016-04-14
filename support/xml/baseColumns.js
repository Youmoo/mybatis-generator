'use strict';
var Tag = require('./../tag/Tag');

module.exports = function BaseColumns(tableDesc) {

    var array = tableDesc.rows.map(function (row) {
        return row.field
    });

    var tag = new Tag('sql')
        .addProp('id', 'baseColumns')
        .addChild(array.join(',\n\t'));


    return new Promise(function (res) {
        res('' + tag);
    })

};