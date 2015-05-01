'use strict';

/**
 * 构造实体类
 */
module.exports = function entity(tableDesc) {
    var entityName = tableDesc.table.replace(/_\w/g, function (match) {
        return match[1].toUpperCase();
    }).replace(/^\w/, function (match) {
        return match.toUpperCase();
    });

    var results = tableDesc.rows.map(function (row) {
        return ['\tprivate ', row.javaType, ' ', row.javaField, ';'].join('')
    }).join('\n');

    return new Promise(function (res) {
        res([
            '@Data',
            'public class ' + entityName + ' {',
            results,
            '}'
        ].join('\n'));
    })
};