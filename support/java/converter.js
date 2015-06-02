'use strict';

var camelCase = require('./../func/camelCase');
var capitalize = require('./../func/capitalize');
/**
 * 构造实体类
 */
module.exports = function entity(tableDesc) {

    var results = tableDesc.rows.map(function (row) {
        var field = capitalize(row.javaField);
        return ['\tresult.set', field, '(bean.get', field, '());'].join('')
    }).join('\n');

    return new Promise(function (res) {
        res([
            'public A convert(Bean bean){',
            '\tA result=new A();',
            results,
            '}'
        ].join('\n'));
    })
};