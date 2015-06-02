'use strict';

/**
 * 生成spring mvc的controller方法
 * @param tableDesc
 */
module.exports = function controller(tableDesc) {
    debugger;
    var selects = tableDesc.rows.map(function (row) {
        return '\tSELECT("' + row.field + ' as ' + row.javaField + '");';
    }).join('\n');
    var results = ['new SQL(){{\n',
        selects,
        '\n\tFROM("' + tableDesc.table + '");\n',
        '}}.toString()'].join('');

    return new Promise(function (res) {
        res(results);
    });

};