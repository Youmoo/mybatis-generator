'use strict';

/**
 * 使用别名
 */
module.exports = function BaseColumns(tableDesc) {
    var array = tableDesc.rows.map(function (row) {
        return '\t' + row.field + ' as ' + row.javaField;
    });

    var content = ['<sql id="baseAliasedColumns">\n', array.join(',\n'), '\n</sql>'].join('');

    return new Promise(function (res) {
        res(content);
    });

};