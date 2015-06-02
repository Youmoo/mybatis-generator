'use strict';

var camelCase = require('./../func/camelCase');
var capitalize = require('./../func/capitalize');

module.exports = function entity(tableDesc) {
    var entityName = capitalize(camelCase(tableDesc.table));

    var results = tableDesc.rows.map(function (row) {
        return ['\tprivate ', row.javaType, ' ', row.javaField, ';'].join('')
    }).join('\n');

    return new Promise(function (res) {
        res([
            'import lombok.Data;',
            '@Data',
            'public class ' + entityName + ' {',
            results,
            '}'
        ].join('\n'));
    })
};