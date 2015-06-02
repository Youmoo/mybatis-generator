'use strict';
var Tag = require('./../tag/Tag');

/**
 * 使用别名
 */
module.exports = function BaseColumns(tableDesc) {
    var array = tableDesc.rows.map(function (row) {
        return row.field + ' as ' + row.javaField;
    });

    var tag = new Tag('sql')
        .addProp('id', 'baseAliasedColumns')
        .addChild(array.join(',\n\t'));


    return new Promise(function (res) {
        res('' + tag);
    });

};